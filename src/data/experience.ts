import { LanguageCode } from "@/locales";

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  type: "internship" | "freelance" | "opensource" | "hackathon" | "academic";
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  images?: string[];
}

const experienceData = {
  en: [
    {
      id: "Unified Mentor",
      role: "MERN Stack Developer Intern",
      organization: "Unified Mentor",
      location: "Remote, Hyderabad, India",
      duration: "November 2025 – February 2026",
      type: "internship" as const,
      description: "Completed a MERN Stack Development internship focused on building production-ready web applications. Gained hands-on experience in frontend and backend development, database management, API integration, state management, and performance optimization. Worked with modern development practices including React Query, TypeScript, Material UI, and responsive design principles.",
      responsibilities: [
        "Developed and maintained real-world web applications using the MERN stack",
        "Implemented CRUD operations and integrated RESTful APIs for efficient data management",
        "Managed application state, server-side data fetching, caching, and synchronization using React Query",
        "Designed responsive user interfaces using React, Material UI, and modern CSS techniques",
        "Implemented loading states, skeleton screens, and error handling to improve user experience",
        "Collaborated with project requirements and followed industry-standard development workflows",
        "Worked with MongoDB and PostgreSQL databases for data storage and retrieval"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "React Query", "REST APIs", "Material UI", "Git"],
      achievements: [
        "Successfully developed and deployed two complete web applications during the internship",
        "Strengthened understanding of full-stack application architecture and development workflows",
        "Gained practical experience in TypeScript, React Query, and asynchronous data management",
        "Implemented responsive designs ensuring compatibility across desktop, tablet, and mobile devices",
        "Enhanced application performance through efficient query handling, caching, and loading optimization",
        "Improved user experience by implementing skeleton loaders, error boundaries, and optimized UI states"
      ]
    },
    {
      id: "Personal Learning",
      role: "Self-Directed Software Developer",
      organization: "Independent Learning & Personal Projects",
      location: "Hyderabad, India",
      duration: "June 2023 – Present",
      type: "academic" as const,
      description: "Focused on project-based learning to develop practical software engineering skills. Built web applications, explored backend architectures, worked with databases, and gained hands-on experience with modern development tools, deployment workflows, and AI technologies.",
      responsibilities: [
        "Developed real-world projects to apply software engineering concepts in practical environments",
        "Designed and integrated RESTful APIs for frontend and backend communication",
        "Learned backend development using Node.js, Express.js, and database technologies",
        "Explored machine learning fundamentals, AI workflows, and intelligent application development",
        "Implemented responsive user interfaces and modern frontend architectures using React",
        "Practiced deployment, version control, debugging, and application optimization techniques"
      ],
      technologies: ["React", "JavaScript", "MongoDB", "Node.js", "Express.js", "TypeScript", "PostgreSQL", "Python", "Git", "GitHub", "REST APIs"],
      achievements: [
        "Built and deployed multiple full-stack web applications using modern development technologies",
        "Gained practical understanding of frontend, backend, database, and deployment workflows",
        "Developed strong problem-solving skills through hands-on project implementation",
        "Expanded knowledge beyond web development by understanding core software engineering principles applicable to mobile and cross-platform development",
        "Integrated AI and machine learning concepts into personal projects and experimental applications"
      ]
    }
  ],
  de: [
    {
      id: "Unified Mentor",
      role: "MERN Stack Entwickler Praktikant",
      organization: "Unified Mentor",
      location: "Remote, Hyderabad, Indien",
      duration: "November 2025 – Februar 2026",
      type: "internship" as const,
      description: "Absolvierte ein MERN Stack Development Praktikum mit dem Schwerpunkt auf der Entwicklung produktionsreifer Webanwendungen. Sammelte praktische Erfahrungen in der Frontend- und Backend-Entwicklung, Datenbankverwaltung, API-Integration, Zustandsverwaltung und Leistungsoptimierung. Arbeitete mit modernen Entwicklungspraktiken wie React Query, TypeScript, Material UI und responsivem Design.",
      responsibilities: [
        "Entwicklung und Pflege realer Webanwendungen mit dem MERN-Stack",
        "Implementierung von CRUD-Operationen und Integration von RESTful-APIs",
        "Verwaltung des Anwendungsstatus, serverseitiges Datenabrufen, Caching und Synchronisierung mit React Query",
        "Entwurf reaktionsschneller Benutzeroberflächen mit React, Material UI und modernen CSS-Techniken",
        "Implementierung von Ladezuständen, Skeleton-Screens und Fehlerbehandlung zur Verbesserung der Benutzererfahrung",
        "Zusammenarbeit bei Projektanforderungen und Befolgung branchenüblicher Entwicklungsabläufe",
        "Arbeit mit MongoDB und PostgreSQL-Datenbanken"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "React Query", "REST APIs", "Material UI", "Git"],
      achievements: [
        "Erfolgreiche Entwicklung und Bereitstellung von zwei kompletten Webanwendungen während des Praktikums",
        "Gestärktes Verständnis für Full-Stack-Anwendungsarchitektur und Entwicklungsabläufe",
        "Praktische Erfahrung in TypeScript, React Query und asynchronem Datenmanagement gesammelt",
        "Implementierung responsiver Designs, die Kompatibilität auf Desktop, Tablet und mobilen Geräten gewährleisten",
        "Verbesserte Anwendungsleistung durch effiziente Abfrageverarbeitung, Caching und Ladeoptimierung",
        "Verbesserte Benutzererfahrung durch Implementierung von Skeleton Loaders, Fehlergrenzen und optimierten UI-Status"
      ]
    },
    {
      id: "Personal Learning",
      role: "Selbstgesteuerter Softwareentwickler",
      organization: "Unabhängiges Lernen & Persönliche Projekte",
      location: "Hyderabad, Indien",
      duration: "Juni 2023 – Heute",
      type: "academic" as const,
      description: "Fokus auf projektbasiertes Lernen zur Entwicklung praktischer Fähigkeiten im Software-Engineering. Entwicklung von Webanwendungen, Erforschung von Backend-Architekturen, Arbeit mit Datenbanken und praktische Erfahrung mit modernen Entwicklungstools, Bereitstellungsabläufen und KI-Technologien gesammelt.",
      responsibilities: [
        "Entwicklung realer Projekte zur Anwendung von Software-Engineering-Konzepten",
        "Entwurf und Integration von RESTful-APIs für Frontend- und Backend-Kommunikation",
        "Erlernen der Backend-Entwicklung mit Node.js, Express.js und Datenbanktechnologien",
        "Erforschung von maschinellem Lernen, KI-Workflows und intelligenter Anwendungsentwicklung",
        "Implementierung reaktionsschneller Benutzeroberflächen und moderner Frontend-Architekturen mit React",
        "Üben von Bereitstellung, Versionskontrolle, Debugging und Anwendungoptimierungstechniken"
      ],
      technologies: ["React", "JavaScript", "MongoDB", "Node.js", "Express.js", "TypeScript", "PostgreSQL", "Python", "Git", "GitHub", "REST APIs"],
      achievements: [
        "Aufbau und Bereitstellung mehrerer Full-Stack-Webanwendungen mit modernen Entwicklungstechnologien",
        "Praktisches Verständnis von Frontend-, Backend-, Datenbank- und Bereitstellungsabläufen",
        "Entwicklung starker Fähigkeiten zur Problemlösung durch praktische Projektimplementierung",
        "Erweitertes Wissen über die Webentwicklung hinaus durch Verständnis der Kernprinzipien des Software-Engineerings",
        "Integration von KI- und Machine-Learning-Konzepten in persönliche Projekte"
      ]
    }
  ]
};

export const getExperience = (lang: LanguageCode): Experience[] => experienceData[lang] || experienceData.en;
export const experiences: Experience[] = experienceData.en;
