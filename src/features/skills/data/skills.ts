export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Mobile App Development',
    skills: ['Flutter (Dart)', 'Java, XML'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Database Management',
    skills: ['Firebase', 'MongoDB', 'Shared Preferences'],
  },
  {
    title: 'State Management',
    skills: ['GetX', 'Riverpod', 'Provider'],
  },
  {
    title: 'Programming Languages',
    skills: ['Dart', 'TypeScript', 'JavaScript', 'Java', 'Python', 'C++', 'HTML/CSS'],
  },
  {
    title: 'IoT Development',
    skills: ['Microcontrollers (Arduino, ESP8266)', 'Sensors & Cloud integration'],
  },
  {
    title: 'Version Control & Tools',
    skills: ['Git & GitHub', 'Vite', 'Figma'],
  },
];
