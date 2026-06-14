import React, { useState, useEffect, useRef } from 'react';

interface ProjectCarouselProps {
  images: string[];
  projectId: string;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images, projectId }) => {
  const cardsCount = 5;
  const cardWidth = 170; // Matches CSS width
  // Radius calculation: R = width / (2 * tan(pi / n)) => R = 170 / (2 * tan(36deg)) = 117px
  const radius = Math.round(cardWidth / (2 * Math.tan(Math.PI / cardsCount)));
  const anglePerCard = 360 / cardsCount;

  const [currentAngle, setCurrentAngle] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const startX = useRef(0);
  const dragStartAngle = useRef(0);
  const cylinderRef = useRef<HTMLDivElement>(null);
  const autoRotateTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Sync index based on rotation angle
  useEffect(() => {
    let index = Math.round(-currentAngle / anglePerCard) % cardsCount;
    if (index < 0) index += cardsCount;
    setCurrentIndex(index);
  }, [currentAngle]);

  // Autoplay loop
  const startAutoRotate = () => {
    stopAutoRotate();
    autoRotateTimer.current = setInterval(() => {
      setCurrentAngle(prev => prev - anglePerCard);
    }, 4500);
  };

  const stopAutoRotate = () => {
    if (autoRotateTimer.current) {
      clearInterval(autoRotateTimer.current);
      autoRotateTimer.current = null;
    }
  };

  useEffect(() => {
    startAutoRotate();
    return () => stopAutoRotate();
  }, []);

  // Controls
  const rotateNext = () => {
    stopAutoRotate();
    setCurrentAngle(prev => prev - anglePerCard);
    startAutoRotate();
  };

  const rotatePrev = () => {
    stopAutoRotate();
    setCurrentAngle(prev => prev + anglePerCard);
    startAutoRotate();
  };

  // Drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
    dragStartAngle.current = currentAngle;
    stopAutoRotate();
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const dx = clientX - startX.current;
    const sensitivity = 0.55;
    setCurrentAngle(dragStartAngle.current + dx * sensitivity);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Snap to nearest card
    setCurrentAngle(prev => {
      const snappedIndex = Math.round(-prev / anglePerCard);
      return -snappedIndex * anglePerCard;
    });
    startAutoRotate();
  };

  // Listen to window events to ensure smooth dragging releases outside component
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
  }, [isDragging, currentAngle]);

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
          ref={cylinderRef}
          className="carousel-3d-cylinder" 
          style={{ 
            transform: `rotateY(${currentAngle}deg)`,
            transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {images.map((imgUrl, i) => {
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
                      // Fail-safe if unsplash fails: show visual color grid patterns
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
        💡 Drag or swipe to spin the cylinder
      </p>
    </div>
  );
};
