import React, { useState } from 'react';
import { ProjectCarousel } from './ProjectCarousel';

interface Project {
  id: string;
  title: string;
  role: string;
  timeline: string;
  status: 'Delivered' | 'In Progress' | 'Academic';
  shortDesc: string;
  problem: string;
  features: string[];
  techStack: string[];
  methodology: string;
  futureScope: string;
  github?: string;
  playStore?: string;
  appStore?: string;
}

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const demoImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&h=450&q=80",
    "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=300&h=450&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=300&h=450&q=80",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=300&h=450&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&h=450&q=80"
  ];

  const projectsList: Project[] = [
    {
      id: "abuf",
      title: "Mobile App — ABUF (Admin & User)",
      role: "Full Stack Apps Developer",
      timeline: "2023 - 2024",
      status: "Delivered",
      shortDesc: "Cross-platform application facilitating campaign coordination, donation tracking, and event scheduling with multi-role access control.",
      problem: "Manual logs of charity distributions and non-profit member events often lead to transaction discrepancies, delayed resource allocation, and a complete lack of real-time visibility for general donors.",
      features: [
        "Role-Based Access: Split admin dashboard and user interface views.",
        "Real-Time Donation Flow: Live donation progress tracking.",
        "Campaign Management: Admins can create and edit active charity goals.",
        "Push Notifications: Instant campus-wide emergency event alerts."
      ],
      techStack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Node.js", "GetX"],
      methodology: "Created using Agile sprints, starting with standard Figma designs, building high-fidelity layout controllers using Flutter GetX, and integrating Firebase Functions for secure database writes.",
      futureScope: "Integrate automated tax exemption certificate generator APIs and incorporate multi-currency international payment gateway SDKs.",
      github: "https://github.com/devwork-dotcom/abuf-app",
      playStore: "#"
    },
    {
      id: "bdp",
      title: "Mobile App — Bangladesh Diesel Plant Ltd.",
      role: "Full Stack Flutter App Developer",
      timeline: "2025",
      status: "Delivered",
      shortDesc: "Enterprise inventory and manufacturing pipeline tracking app featuring parts monitoring, purchase workflows, and system auditing.",
      problem: "Industrial material procurement and stock checkoffs were managed via physical slips, causing operational delays, parts allocation error, and double entry logs in tracking inventory levels.",
      features: [
        "Barcode/QR Scanning: Directly scan physical tags to allocate/audit factory stock.",
        "Requisition Workflows: Department heads approve resource requests in-app.",
        "Real-Time Data Feeds: Instantly syncs storage levels and triggers warning flags.",
        "Secure Logging: Generates permanent PDF audit records for system changes."
      ],
      techStack: ["Flutter", "Dart", "Node.js", "Express", "MongoDB", "Riverpod"],
      methodology: "Engineered using modular layers (Clean Architecture) inside Flutter, implementing offline database caching with SQLite to ensure operational access in weak network zones inside factory floors.",
      futureScope: "Add predictive inventory restocking algorithms using simple regression models to analyze historic seasonal demand.",
      github: "https://github.com/devwork-dotcom/bdp-app"
    },
    {
      id: "swajan",
      title: "Mobile App — DUET Swajan (Blood Donation)",
      role: "Full Stack Flutter App Developer",
      timeline: "2024 - 2025",
      status: "Delivered",
      shortDesc: "Urgent blood donation platform connecting campus donors with recipients in real-time, featuring chat rooms and donor coordinates mapping.",
      problem: "During critical emergencies, searching manually for matching blood groups within a university community takes precious hours. Instant matching and communication are vital.",
      features: [
        "Emergency Broadcasts: One-click trigger notifying compatible nearby donors.",
        "Location Matching: Integrated campus map to spot donor locations.",
        "Instant Messaging: Direct inside-app chat between recipient and donor.",
        "Donor Tracking: Log details of previous donation cycles and track availability."
      ],
      techStack: ["Flutter", "Dart", "Firebase DB", "Geofire", "FCM (Push Alerts)"],
      methodology: "Emphasized performance optimization for the search engines, caching profiles locally and using Geofire indexing to restrict geographic queries to a 5-mile campus radius.",
      futureScope: "Integrate automatic hospital-grade donor screening checks and a reward token system for active volunteers.",
      github: "https://github.com/devwork-dotcom/bdp-app"
    },
    {
      id: "dining",
      title: "DUET Hall Dining Management",
      role: "Full Stack Flutter App Developer",
      timeline: "2024 - Present",
      status: "In Progress",
      shortDesc: "Meal logging system for dormitories featuring QR codes, daily menu votes, and automated grocery expense splitting.",
      problem: "Dormitory mess dining operates on complex spreadsheets or paper cards, which is highly prone to transaction errors, menu confusion, and budget discrepancies during bazar planning.",
      features: [
        "QR Code Scan: Instant meal confirmation scans at the buffet counter.",
        "Auto Bazar Scheduler: Generates daily grocery checksheets automatically.",
        "Expense Tracker: Real-time distribution and calculation of cost ratios.",
        "Menu Vote System: Digital voting polls to pick upcoming weekly menus."
      ],
      techStack: ["Flutter", "Dart", "Node.js", "Express", "MongoDB", "Provider"],
      methodology: "Built using atomic database locks in MongoDB to ensure simultaneous QR coupon scans do not result in double-spending or duplicate charge sheets.",
      futureScope: "Incorporate RFID biometric student smartcards and implement ML-based food waste estimation algorithms.",
      github: "#"
    },
    {
      id: "smart-blood",
      title: "Smart Blood Donation & Charity App",
      role: "Academic Project",
      timeline: "2025",
      status: "Academic",
      shortDesc: "Native Android application featuring automated volunteer registrations, emergency feeds, social walls, and charity event coordination.",
      problem: "Disconnected donor databases and a complete lack of engaging social elements lead to low volunteer retention rates and make coordinate outreach difficult.",
      features: [
        "Social Feeds: Wall post sharing system (like Facebook) to boost donor stories.",
        "Digital Certification: Automatic e-cert cards for verified donors.",
        "Donor Matchups: Filter database by blood group, availability, and area code.",
        "Charity Campaigns: In-app dashboards tracking active medical fundraising."
      ],
      techStack: ["Android SDK", "Java", "XML Layouts", "Firebase Realtime DB", "Firebase Storage"],
      methodology: "Built using Java MVC structure, relying heavily on Firebase listeners to automatically redraw posts and sync notifications without manual refresh delays.",
      futureScope: "Migrate to Kotlin using Jetpack Compose components and integrate Google Maps APIs to route donors to critical requests.",
      github: "#"
    },
    {
      id: "bdms",
      title: "Blood Donation Management System",
      role: "Academic Project",
      timeline: "2024",
      status: "Academic",
      shortDesc: "Centralized web platform for blood banks tracking inventory levels, reserving donation slots, and listing public blood drives.",
      problem: "Regional blood banks operate as isolated clinics, making it near impossible to trace aggregate stock counts, reserve appointments online, or coordinate emergency shipments.",
      features: [
        "Admin CRUD: Dynamic controls to edit donor accounts and blood bag tallies.",
        "Event Feeds: Interactive catalog listing upcoming blood collection drives.",
        "Shelf-Life Alerts: System flags blood bags nearing their 42-day storage limit.",
        "Slot Reservations: Let users book time slots for their donation sessions."
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "JSP", "Java Servlets", "MySQL DB"],
      methodology: "Developed utilizing the model-view-controller paradigm via Servlets, separating raw query logic from UI rendering blocks to support future scaling.",
      futureScope: "Rewrite using a headless architecture: a React dashboard talking to secure Spring Boot rest services.",
      github: "#"
    },
    {
      id: "petfeeder",
      title: "Automatic Pet Feeder",
      role: "Academic Project",
      timeline: "2024",
      status: "Academic",
      shortDesc: "IoT-controlled smart pet feeder using an ESP8266 Wi-Fi module, servo dispensers, and a real-time status mobile interface.",
      problem: "Busy pet owners often miss strict feeding routines when away, which results in pet anxiety, erratic nutritional routines, or unhealthy overeating habits.",
      features: [
        "Scheduled Feeding: Feed pet at target times based on device clock configs.",
        "Portion Adjustments: Micro-control motor rotation angles to size portions.",
        "Weight Indicators: Ultrasonic sensor tracks remaining food heights.",
        "One-Tap Trigger: Remotely dispense emergency treats from anywhere."
      ],
      techStack: ["ESP8266 (C++)", "Blynk IoT API", "Servo Motor", "Ultrasonic Sensor"],
      methodology: "Integrated hardware microcontrollers with Blynk IoT services, setting up a listener client on the ESP8266 board that triggers servo sweeps on incoming web request tokens.",
      futureScope: "Add a web-camera streaming feed to monitor pets visually and record voice clips to alert pets during meals.",
      github: "#"
    },
    {
      id: "gsms",
      title: "General Store Management System",
      role: "Academic Project",
      timeline: "2024",
      status: "Academic",
      shortDesc: "Desktop POS system built with Java Swing and MySQL, featuring barcode checkouts, invoice prints, and daily analytics.",
      problem: "Local retail stores lose productivity during peak checkout hours due to laggy, complex POS terminals that lack barcode search and sales analytics.",
      features: [
        "Rapid Billing: Process item barcodes using simple scanning triggers.",
        "Auto Invoicing: Formats dynamic receipts using clean template engines.",
        "Safety Stock Warnings: Flags when items fall below reorder limits.",
        "Sales Audits: Aggregates daily charts tracking total checkout earnings."
      ],
      techStack: ["Java Swing", "JDBC", "MySQL DB", "JasperReports"],
      methodology: "Built using Java Swing layout containers, implementing a localized SQL transaction model to guarantee rapid checkouts with absolute data consistency.",
      futureScope: "Synchronize physical terminal DBs with secure cloud backup servers to support chain store operations.",
      github: "#"
    },
    {
      id: "todo",
      title: "To Do Manager",
      role: "Academic Project",
      timeline: "2025",
      status: "Academic",
      shortDesc: "Native Android personal task tracker featuring categorizations, priority levels, local caching, and rapid search queries.",
      problem: "Most task notebooks are heavily bloated with complex structures, making it difficult to log quick thoughts or track priorities on the go.",
      features: [
        "Rapid Logging: One-tap task creation with category tags.",
        "Smart Search: Direct query input to filter tasks instantly.",
        "Offline Sync: Direct caching onto SQLite database frames.",
        "Priority Badges: Categorize items using Low, Medium, and High tags."
      ],
      techStack: ["Android SDK", "Java", "XML UI", "SQLite Database"],
      methodology: "Built utilizing the native Android SDK framework, managing list items via custom RecyclerView adapters and animating checked actions dynamically.",
      futureScope: "Add cloud backups, alarm notifications, and sub-task lists.",
      github: "#"
    }
  ];

  const handleToggleDetails = (id: string) => {
    setActiveProject(prev => (prev === id ? null : id));
  };

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Delivered':
        return <span className="px-3 py-1 rounded-full bg-emerald-105/10 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-450 border border-emerald-500/10 text-xs font-semibold select-none">Delivered</span>;
      case 'In Progress':
        return <span className="px-3 py-1 rounded-full bg-amber-105/10 dark:bg-amber-950/30 text-amber-600 dark:text-amber-450 border border-amber-500/10 text-xs font-semibold select-none">In Progress</span>;
      default:
        return <span className="px-3 py-1 rounded-full bg-sky-105/10 dark:bg-sky-950/30 text-sky-600 dark:text-sky-450 border border-sky-500/10 text-xs font-semibold select-none">Academic</span>;
    }
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-start relative z-10">
        {/* Title */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight border-b-2 border-sky-500 pb-1.5 inline-block">
            Projects
          </h2>
        </div>

        {/* Project List */}
        <div className="md:col-span-8 space-y-6">
          {projectsList.map((project) => {
            const isOpen = activeProject === project.id;
            return (
              <div 
                key={project.id}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-slate-200/50 dark:border-slate-800/80 hover:border-sky-500/30 dark:hover:border-sky-500/20 shadow-sm hover:shadow-md transition-all duration-300 p-6"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-sky-500 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      {project.role} | {project.timeline}
                    </p>
                  </div>
                  {getStatusBadge(project.status)}
                </div>
                
                <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed mb-4">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2.5 items-center justify-between">
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-sky-50 dark:hover:bg-slate-750 hover:text-sky-500 transition"
                      >
                        <i className="fab fa-github mr-1"></i> GitHub
                      </a>
                    )}
                    {project.playStore && (
                      <a 
                        href={project.playStore} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-sky-50 dark:hover:bg-slate-750 hover:text-sky-500 transition"
                      >
                        <i className="fab fa-google-play mr-1"></i> Play Store
                      </a>
                    )}
                  </div>
                  <button 
                    onClick={() => handleToggleDetails(project.id)}
                    className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700 text-white text-xs font-bold transition-all shadow shadow-sky-500/10 hover:shadow-sky-500/20 active:scale-95 cursor-pointer"
                  >
                    {isOpen ? 'Hide Project Details' : 'View Project Screens & Details'}
                  </button>
                </div>

                {/* Details Dropdown Drawer */}
                <div className={`project-detail-panel ${isOpen ? 'show' : ''}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-4">
                    {/* Carousel */}
                    {isOpen && (
                      <ProjectCarousel 
                        images={demoImages} 
                        projectId={project.id} 
                      />
                    )}

                    {/* Explanations (Clean UI, slate/gray headers with sky-500 icons) */}
                    <div className="space-y-4 text-xs">
                      <div>
                        <h4 className="text-slate-800 dark:text-slate-200 font-bold flex items-center gap-1.5 mb-1 select-none">
                          <i className="fas fa-exclamation-circle text-sky-500"></i> Problem Solved
                        </h4>
                        <p className="text-slate-600 dark:text-slate-350 leading-relaxed">{project.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-slate-800 dark:text-slate-200 font-bold flex items-center gap-1.5 mb-1.5 select-none">
                          <i className="fas fa-list-check text-sky-500"></i> Key Features
                        </h4>
                        <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-350">
                          {project.features.map((feat, fIdx) => (
                            <li key={fIdx} className="leading-relaxed">{feat}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-slate-800 dark:text-slate-200 font-bold flex items-center gap-1.5 mb-1 select-none">
                          <i className="fas fa-layer-group text-sky-500"></i> Tech Stack & Architecture
                        </h4>
                        <div className="flex flex-wrap gap-1.5 mt-1 select-none">
                          {project.techStack.map((tech, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/60 text-slate-650 dark:text-slate-300 font-semibold text-[10px]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-slate-800 dark:text-slate-200 font-bold flex items-center gap-1.5 mb-1 select-none">
                          <i className="fas fa-gears text-sky-500"></i> Methodology & Flow
                        </h4>
                        <p className="text-slate-600 dark:text-slate-350 leading-relaxed">{project.methodology}</p>
                      </div>

                      <div>
                        <h4 className="text-slate-800 dark:text-slate-200 font-bold flex items-center gap-1.5 mb-1 select-none">
                          <i className="fas fa-forward text-sky-500"></i> Future Scope
                        </h4>
                        <p className="text-slate-600 dark:text-slate-350 leading-relaxed">{project.futureScope}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
