import { useCallback, useEffect, useRef, useState } from 'react';

interface ProjectCarouselProps {
  images: string[];
  projectId: string;
}

export const ProjectCarousel = ({ images, projectId }: ProjectCarouselProps) => {
  const cardImages = images.slice(0, 5);
  const cardsCount = cardImages.length || 1;
  const cardWidth = 170;
  const radius = Math.round(cardWidth / (2 * Math.tan(Math.PI / cardsCount)));
  const anglePerCard = 360 / cardsCount;

  const [currentAngle, setCurrentAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const startX = useRef(0);
  const dragStartAngle = useRef(0);
  const autoRotateTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  let currentIndex = Math.round(-currentAngle / anglePerCard) % cardsCount;
  if (currentIndex < 0) currentIndex += cardsCount;

  const stopAutoRotate = useCallback(() => {
    if (autoRotateTimer.current) {
      clearInterval(autoRotateTimer.current);
      autoRotateTimer.current = null;
    }
  }, []);

  const startAutoRotate = useCallback(() => {
    stopAutoRotate();
    autoRotateTimer.current = setInterval(() => {
      setCurrentAngle(prev => prev - anglePerCard);
    }, 4500);
  }, [anglePerCard, stopAutoRotate]);

  useEffect(() => {
    startAutoRotate();
    return stopAutoRotate;
  }, [startAutoRotate, stopAutoRotate]);

  const rotateNext = useCallback(() => {
    stopAutoRotate();
    setCurrentAngle(prev => prev - anglePerCard);
    startAutoRotate();
  }, [anglePerCard, startAutoRotate, stopAutoRotate]);

  const rotatePrev = useCallback(() => {
    stopAutoRotate();
    setCurrentAngle(prev => prev + anglePerCard);
    startAutoRotate();
  }, [anglePerCard, startAutoRotate, stopAutoRotate]);

  const handleDragStart = useCallback((clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
    dragStartAngle.current = currentAngle;
    stopAutoRotate();
  }, [currentAngle, stopAutoRotate]);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const dx = clientX - startX.current;
    const sensitivity = 0.55;
    setCurrentAngle(dragStartAngle.current + dx * sensitivity);
  }, [isDragging]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    setCurrentAngle(prev => {
      const snappedIndex = Math.round(-prev / anglePerCard);
      return -snappedIndex * anglePerCard;
    });
    startAutoRotate();
  }, [anglePerCard, isDragging, startAutoRotate]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) handleDragMove(e.clientX);
    };
    const onMouseUp = () => {
      if (isDragging) handleDragEnd();
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [handleDragEnd, handleDragMove, isDragging]);

  return (
    <div className="flex flex-col items-center justify-center relative py-6 bg-slate-100/30 dark:bg-slate-900/30 rounded-3xl border border-slate-200/40 dark:border-slate-800/40 w-full select-none">
      {/* 3D Viewport */}
      <div 
        className="carousel-3d-viewport cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        <div 
          className="carousel-3d-cylinder" 
          style={{ 
            transform: `rotateY(${currentAngle}deg)`,
            transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {cardImages.map((imgUrl, i) => {
            const isCurrentActive = i === currentIndex;
            return (
              <div 
                key={i}
                id={`card-${projectId}-${i}`}
                className={`carousel-3d-card ${isCurrentActive ? 'active-card' : 'inactive-card'}`}
                style={{ 
                  transform: `rotateY(${i * anglePerCard}deg) translateZ(${radius}px)` 
                }}
              >
                <div className="mockup-img-container">
                  <img 
                    src={imgUrl} 
                    alt={`Project Screen ${i + 1}`}
                    draggable="false"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/300/450?random=${i + 1}`;
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel Navigation Buttons */}
      <div className="flex items-center gap-5 mt-6 z-20">
        <button 
          onClick={rotatePrev}
          className="carousel-btn"
          aria-label="Previous Screen"
        >
          <i className="fas fa-chevron-left text-xs"></i>
        </button>
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3.5 py-1 rounded-full shadow border border-slate-150 dark:border-slate-700">
          {currentIndex + 1} / {cardsCount}
        </span>
        <button 
          onClick={rotateNext}
          className="carousel-btn"
          aria-label="Next Screen"
        >
          <i className="fas fa-chevron-right text-xs"></i>
        </button>
      </div>
      <p className="text-[10px] text-slate-450 dark:text-slate-500 mt-2.5 italic">
        Drag or swipe to spin the cylinder
      </p>
    </div>
  );
};
