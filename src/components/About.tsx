import React, { useState, useEffect } from 'react';

export const About: React.FC = () => {
  const animatedText = "Passionate developer creating production-ready Android & iOS apps, building modern, efficient, and beautiful mobile experiences.";
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < animatedText.length) {
      const timer = setTimeout(() => {
        setTypedText(prev => prev + animatedText.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
      }, 2500); // Wait 2.5s before restarting loop
      return () => clearTimeout(timer);
    }
  }, [charIndex]);

  const scrollToProjects = () => {
    const projectsSec = document.getElementById('projects');
    if (projectsSec) {
      projectsSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="flex flex-col md:flex-row items-center gap-8 md:gap-16 pt-28 pb-10 max-w-6xl mx-auto px-6 relative">
      {/* Profile info & links */}
      <div className="flex flex-col items-center md:items-start w-full md:w-[35%] z-10">
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-sky-500 shadow-xl relative hover:scale-105 transition duration-300">
          <img 
            src="assets/profile.png" 
            alt="Md. Shamim Hosen" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // fallback if profile image fails
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80';
            }}
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-5 text-slate-800 dark:text-white text-center md:text-left tracking-tight">
          Md. Shamim Hosen
        </h1>
        <p className="text-base md:text-lg mt-1 font-semibold text-sky-500 dark:text-sky-400 text-center md:text-left">
          Software Engineer
        </p>
        
        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-5">
          <a 
            href="https://github.com/devwork-dotcom" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 hover:bg-sky-50 dark:hover:bg-slate-850 hover:text-sky-500 hover:border-sky-500/20 dark:hover:text-sky-400 text-slate-700 dark:text-slate-350 text-xs font-semibold transition-all duration-200"
          >
            <i className="fab fa-github text-sm"></i> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/md-shamim-hosen-212270373" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 hover:bg-sky-50 dark:hover:bg-slate-850 hover:text-sky-500 hover:border-sky-500/20 dark:hover:text-sky-400 text-slate-700 dark:text-slate-350 text-xs font-semibold transition-all duration-200"
          >
            <i className="fab fa-linkedin text-sm"></i> LinkedIn
          </a>
          <a 
            href="mailto:shamim.devwork@gmail.com"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 hover:bg-sky-50 dark:hover:bg-slate-850 hover:text-sky-500 hover:border-sky-500/20 dark:hover:text-sky-400 text-slate-700 dark:text-slate-350 text-xs font-semibold transition-all duration-200"
          >
            <i className="fas fa-envelope text-sm"></i> Email
          </a>
        </div>
      </div>

      {/* Hero Welcome banner */}
      <div className="w-full md:w-[60%] flex flex-col justify-center text-center md:text-left z-10">
        <h2 className="text-3xl md:text-5xl font-black text-slate-850 dark:text-white leading-tight">
          Hi, I'm <span className="text-sky-500 dark:text-sky-400">Shamim.</span>
        </h2>
        <div className="mt-4 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed min-h-[72px] max-w-xl">
          <span>{typedText}</span>
          <span className="blinking-cursor">|</span>
        </div>
        <div className="mt-6 flex justify-center md:justify-start">
          <button 
            onClick={scrollToProjects}
            className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700 text-white font-bold text-sm shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all duration-250 active:scale-95 cursor-pointer"
          >
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
};
