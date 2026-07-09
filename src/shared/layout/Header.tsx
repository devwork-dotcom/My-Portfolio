import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}assets/resu.pdf`;
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
        <div 
          className="text-xl font-extrabold text-slate-800 dark:text-white cursor-pointer select-none tracking-tight hover:text-sky-500 transition-colors"
          onClick={() => scrollToSection('about')}
        >
          Md. Shamim Hosen
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-wrap items-center gap-1">
          {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="px-3.5 py-1.5 rounded-lg text-sm font-semibold capitalize text-slate-650 dark:text-slate-350 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-200"
            >
              {section}
            </button>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <a
            href={resumeUrl}
            download
            className="text-xs font-bold px-3 py-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/45 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/40 hover:bg-sky-100 dark:hover:bg-sky-900/60 transition duration-200"
          >
            Resume
          </a>
          <button
            onClick={toggleTheme}
            className="p-1.5 w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm transition-all duration-200"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden p-1 text-slate-700 dark:text-slate-300 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800/80 flex flex-col absolute w-full left-0 top-full z-40 p-2 shadow-xl">
          {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-left w-full px-4 py-2 text-sm font-semibold capitalize text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-500 rounded-lg transition"
            >
              {section}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};
