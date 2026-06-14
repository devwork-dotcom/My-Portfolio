import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-start relative z-10">
        {/* Title */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight border-b-2 border-sky-500 pb-1.5 inline-block">
            Contact
          </h2>
        </div>

        {/* Cards */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 p-5 text-center hover:border-sky-500/20 shadow-sm transition duration-300">
            <div className="w-10 h-10 rounded-full bg-sky-50 dark:bg-sky-950/30 flex items-center justify-center mx-auto text-sky-500 text-sm mb-3">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Phone</h3>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">+880 1788 435394</p>
          </div>

          {/* Email */}
          <div className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 p-5 text-center hover:border-sky-500/20 shadow-sm transition duration-300">
            <div className="w-10 h-10 rounded-full bg-sky-50 dark:bg-sky-950/30 flex items-center justify-center mx-auto text-sky-500 text-sm mb-3">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</h3>
            <a 
              href="mailto:shamim.devwork@gmail.com" 
              className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 transition"
            >
              shamim.devwork@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 p-5 text-center hover:border-sky-500/20 shadow-sm transition duration-300">
            <div className="w-10 h-10 rounded-full bg-sky-50 dark:bg-sky-950/30 flex items-center justify-center mx-auto text-sky-500 text-sm mb-3">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Location</h3>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-tight">DUET, Joydebpur, Gazipur-1707, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
};
