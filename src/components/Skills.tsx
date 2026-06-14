import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

export const Skills: React.FC = () => {
  const skillsList: SkillCategory[] = [
    {
      title: "Mobile App Development",
      skills: ["Flutter (Dart)", "Java, XML"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Database Management",
      skills: ["Firebase", "MongoDB", "Shared Preferences"]
    },
    {
      title: "State Management",
      skills: ["GetX", "Riverpod", "Provider"]
    },
    {
      title: "Programming Languages",
      skills: ["Dart", "TypeScript", "JavaScript", "Java", "Python", "C++", "HTML/CSS"]
    },
    {
      title: "IoT Development",
      skills: ["Microcontrollers (Arduino, ESP8266)", "Sensors & Cloud integration"]
    },
    {
      title: "Version Control & Tools",
      skills: ["Git & GitHub", "Vite", "Figma"]
    }
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-start relative z-10">
        {/* Title */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight border-b-2 border-sky-500 pb-1.5 inline-block">
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((cat, idx) => (
            <div 
              key={idx}
              className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:border-sky-500/20 p-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-2.5 py-1 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-800 text-[10px] font-semibold text-slate-650 dark:text-slate-350"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
