import { skillCategories } from '../data/skills';

export const Skills = () => (
  <section id="skills" className="max-w-6xl mx-auto px-6 py-10 relative">
    <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-start relative z-10">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight border-b-2 border-sky-500 pb-1.5 inline-block">
          Skills
        </h2>
      </div>

      <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <article
            key={category.title}
            className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:border-sky-500/20 p-5 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-800 text-[10px] font-semibold text-slate-650 dark:text-slate-350"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
