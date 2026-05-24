import { LanguageCode } from "@/locales";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  avatar?: string;
  type: "professor" | "mentor" | "client" | "peer";
}

const testimonialsData = {
  en: [
    {
      id: "prof-kumar",
      name: "Dr. Rajesh Kumar",
      role: "Associate Professor, Computer Science",
      organization: "University of Technology",
      quote: "Manvith demonstrates exceptional analytical thinking and a genuine passion for research. His work on NLP projects showed remarkable initiative and technical depth for an undergraduate.",
      type: "professor" as const,
    },
    {
      id: "mentor-sarah",
      name: "Sarah Mitchell",
      role: "Senior Software Engineer",
      organization: "TechCorp Solutions",
      quote: "One of the most dedicated interns I've mentored. Manvith quickly grasped complex architectural patterns and consistently delivered high-quality code ahead of schedule.",
      type: "mentor" as const,
    },
    {
      id: "client-james",
      name: "James Rodriguez",
      role: "Founder & CEO",
      organization: "StartupFlow",
      quote: "Manvith built our entire web presence from scratch. His attention to detail, responsive design skills, and proactive communication made the project a huge success.",
      type: "client" as const,
    },
    {
      id: "peer-priya",
      name: "Priya Sharma",
      role: "Full Stack Developer",
      organization: "University Peer",
      quote: "Working with Manvith on our hackathon project was incredible. His leadership, technical skills, and ability to stay calm under pressure inspired the whole team.",
      type: "peer" as const,
    },
  ],
  de: [
    {
      id: "prof-kumar",
      name: "Dr. Rajesh Kumar",
      role: "Außerordentlicher Professor, Informatik",
      organization: "Technische Universität",
      quote: "Manvith zeigt außergewöhnliches analytisches Denken und eine echte Leidenschaft für die Forschung. Seine Arbeit an NLP-Projekten zeigte bemerkenswerte Initiative und technische Tiefe für einen Bachelor-Studenten.",
      type: "professor" as const,
    },
    {
      id: "mentor-sarah",
      name: "Sarah Mitchell",
      role: "Senior Software Engineer",
      organization: "TechCorp Solutions",
      quote: "Einer der engagiertesten Praktikanten, die ich betreut habe. Manvith erfasste komplexe Architekturmuster schnell und lieferte durchweg qualitativ hochwertigen Code vor dem Zeitplan.",
      type: "mentor" as const,
    },
    {
      id: "client-james",
      name: "James Rodriguez",
      role: "Gründer & CEO",
      organization: "StartupFlow",
      quote: "Manvith hat unsere gesamte Webpräsenz von Grund auf neu aufgebaut. Seine Liebe zum Detail, seine Fähigkeiten im responsiven Design und seine proaktive Kommunikation machten das Projekt zu einem großen Erfolg.",
      type: "client" as const,
    },
    {
      id: "peer-priya",
      name: "Priya Sharma",
      role: "Full Stack Entwickler",
      organization: "Universitätskollegin",
      quote: "Die Zusammenarbeit mit Manvith bei unserem Hackathon-Projekt war unglaublich. Seine Führung, seine technischen Fähigkeiten und seine Fähigkeit, unter Druck ruhig zu bleiben, haben das ganze Team inspiriert.",
      type: "peer" as const,
    },
  ]
};

export const getTestimonials = (lang: LanguageCode): Testimonial[] => testimonialsData[lang] || testimonialsData.en;
export const testimonials: Testimonial[] = testimonialsData.en;
