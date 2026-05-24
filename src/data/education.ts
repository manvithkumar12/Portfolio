import { LanguageCode } from "@/locales";

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description: string;
  courses: string[];
  cgpa?: string;
}

const educationData = {
  en: [
    {
      id: "edu-1",
      institution: "Siddhartha Institute of Technology and Sciences",
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      duration: "2023 — 2027",
      location: "Hyderabad, India",
      description: "Pursuing a Bachelor's degree in Computer Science and Engineering with a strong focus on software development, web technologies, databases, and artificial intelligence. Actively involved in developing real-world projects, participating in technical events, and continuously enhancing problem-solving and programming skills.",
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Machine Learning",
        "Software Engineering",
        "Web Development",
        "Object-Oriented Programming"
      ],
      cgpa: "8.0/10",
    },
    {
      id: "edu-2",
      institution: "Narayana Junior College",
      degree: "Intermediate (MPC - Mathematics, Physics & Chemistry)",
      duration: "2021 — 2023",
      location: "Hyderabad, India",
      description: "Completed higher secondary education with a specialization in Mathematics, Physics, and Chemistry. Built a strong analytical foundation and developed a keen interest in technology, logical reasoning, and computer programming.",
      courses: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Logical Reasoning"
      ],
      cgpa: "86%",
    },
    {
      id: "edu-3",
      institution: "Sage International School (CBSE)",
      degree: "Secondary School Education (Class X)",
      duration: "2016 — 2021",
      location: "Hyderabad, India",
      description: "Completed secondary education under the CBSE curriculum while developing strong communication, leadership, teamwork, and presentation skills. Participated in academic and extracurricular activities that strengthened confidence, discipline, and personal growth.",
      courses: [
        "English Communication",
        "Mathematics",
        "Science",
        "Social Studies",
        "Computer Fundamentals",
        "Soft Skills Development"
      ],
      cgpa: "75%",
    },
  ],
  de: [
    {
      id: "edu-1",
      institution: "Siddhartha Institute of Technology and Sciences",
      degree: "Bachelor of Technology (B.Tech) in Informatik und Technik",
      duration: "2023 — 2027",
      location: "Hyderabad, Indien",
      description: "Absolviere ein Bachelor-Studium in Informatik und Technik mit starkem Fokus auf Softwareentwicklung, Webtechnologien, Datenbanken und künstliche Intelligenz. Aktive Beteiligung an der Entwicklung realer Projekte, Teilnahme an technischen Veranstaltungen und kontinuierliche Verbesserung von Problemlösungs- und Programmierfähigkeiten.",
      courses: [
        "Datenstrukturen & Algorithmen",
        "Datenbankverwaltungssysteme",
        "Betriebssysteme",
        "Computernetzwerke",
        "Maschinelles Lernen",
        "Softwaretechnik",
        "Webentwicklung",
        "Objektorientierte Programmierung"
      ],
      cgpa: "8.0/10",
    },
    {
      id: "edu-2",
      institution: "Narayana Junior College",
      degree: "Intermediate (MPC - Mathematik, Physik & Chemie)",
      duration: "2021 — 2023",
      location: "Hyderabad, Indien",
      description: "Abgeschlossene höhere Sekundarstufe mit Schwerpunkt Mathematik, Physik und Chemie. Aufbau einer starken analytischen Grundlage und Entwicklung eines starken Interesses an Technologie, logischem Denken und Computerprogrammierung.",
      courses: [
        "Mathematik",
        "Physik",
        "Chemie",
        "Logisches Denken"
      ],
      cgpa: "86%",
    },
    {
      id: "edu-3",
      institution: "Sage International School (CBSE)",
      degree: "Sekundarschulbildung (Klasse X)",
      duration: "2016 — 2021",
      location: "Hyderabad, Indien",
      description: "Abgeschlossene Sekundarschulbildung im Rahmen des CBSE-Lehrplans bei gleichzeitiger Entwicklung starker Kommunikations-, Führungs-, Teamarbeits- und Präsentationsfähigkeiten. Teilnahme an akademischen und außerschulischen Aktivitäten.",
      courses: [
        "Englische Kommunikation",
        "Mathematik",
        "Wissenschaft",
        "Sozialkunde",
        "Computergrundlagen",
        "Entwicklung von Soft Skills"
      ],
      cgpa: "75%",
    },
  ]
};

export const getEducation = (lang: LanguageCode): Education[] => educationData[lang] || educationData.en;
export const education: Education[] = educationData.en;
