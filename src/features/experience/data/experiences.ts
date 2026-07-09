export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  details: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Flutter Developer',
    company: 'SM Technology',
    duration: 'June 2024 - Present (2 Years)',
    details: [
      'Architected and deployed high-quality, production-ready mobile apps in Flutter.',
      'Implemented advanced state management, network caching, and local storage layers.',
      'Optimized app performance, rendering speeds, and bundle size footprint for iOS & Android.',
      'Collaborated with backend teams to integrate REST APIs and real-time sockets streams.',
    ],
  },
  {
    role: 'IoT Engineer Intern',
    company: 'Bangladesh Rice Research Institute',
    duration: '3 Mar 2025 - 27 Mar 2025',
    details: [
      'Implemented LoRaWAN-based IoT systems for smart agriculture sensing.',
      'Integrated sensors, Arduino controllers, and LoRa wireless transceivers.',
      'Collected real-time environmental field data and pushed logs to cloud portals.',
      'Created database pipelines to trigger automated threshold irrigation controls.',
    ],
  },
];
