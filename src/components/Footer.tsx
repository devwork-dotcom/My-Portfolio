import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-900 transition-colors duration-300 mt-16 select-none">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        {/* Left branding */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold text-slate-800 dark:text-white">Md. Shamim Hosen</p>
          <p className="text-[11px] text-slate-450 dark:text-slate-500 mt-0.5">Flutter & Full Stack Developer</p>
        </div>

        {/* Right social handles */}
        <div className="flex justify-center sm:justify-end gap-4 text-lg text-slate-400 dark:text-slate-600">
          <a 
            href="https://www.linkedin.com/in/md-shamim-hosen-212270373" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition duration-200"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/devwork-dotcom" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition duration-200"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="mailto:shamim.devwork@gmail.com" 
            className="hover:text-sky-500 transition duration-200"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Copyright info */}
      <div className="border-t border-slate-100 dark:border-slate-900/50 py-4 text-center text-[10px] text-slate-400 dark:text-slate-650">
        <p>Built with ❤️ in 2026 • Md. Shamim Hosen</p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Md. Shamim Hosen. All rights reserved.</p>
      </div>
    </footer>
  );
};
