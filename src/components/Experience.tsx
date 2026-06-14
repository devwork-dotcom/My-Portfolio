import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  details: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: "Flutter Developer",
      company: "SM Technology",
      duration: "June 2024 – Present (2 Years)",
      details: [
        "Architected and deployed high-quality, production-ready mobile apps in Flutter.",
        "Implemented advanced state management, network caching, and local storage layers.",
        "Optimized app performance, rendering speeds, and bundle size footprint for iOS & Android.",
        "Collaborated with backend teams to integrate REST APIs and real-time sockets streams."
      ]
    },
    {
      role: "IoT Engineer Intern",
      company: "Bangladesh Rice Research Institute",
      duration: "3 Mar 2025 – 27 Mar 2025",
      details: [
        "Implemented LoRaWAN-based IoT systems for smart agriculture sensing.",
        "Integrated sensors, Arduino controllers, and LoRa wireless transceivers.",
        "Collected real-time environmental field data and pushed logs to cloud portals.",
        "Created database pipelines to trigger automated threshold irrigation controls."
      ]
    }
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-start relative z-10">
        {/* Title */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight border-b-2 border-sky-500 pb-1.5 inline-block">
            Experience
          </h2>
        </div>
        
        {/* Experience Timeline */}
        <div className="md:col-span-8 space-y-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:border-sky-500/30 p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 mb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-800 dark:text-white group-hover:text-sky-500 transition-colors duration-200">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-semibold text-sky-500 dark:text-sky-400 mt-0.5">
                    {exp.company}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full self-start">
                  {exp.duration}
                </span>
              </div>
              <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-350">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
