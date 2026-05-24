import { LanguageCode } from "@/locales";

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  category: "programming" | "web" | "ai" | "cloud" | "database" | "professional";
  image?: string;
}

const certificationsData = {
  en: [
    {
      id: "C-1",
      title: "Getting Started as a Full-Stack Web Developer",
      organization: "LinkedIn Learning",
      date: "September 2024",
      category: "web" as const,
      image: "/1.png",
    },
    {
      id: "C-2",
      title: "Introduction to Front End Development",
      organization: "Simplilearn",
      date: "March 2025",
      credentialId: "8018740",
      category: "web" as const,
      image: "/2.png",
    },
    {
      id: "C-3",
      title: "React: Creating and Hosting a Full-Stack Site",
      organization: "LinkedIn Learning",
      date: "July 2025",
      credentialId: "d1793b28cccb06b4f62803916eb87805c577a28b954c3058ba844eb5ebea06eb",
      category: "web" as const,
      image: "/3.png",
    },
    {
      id: "C-4",
      title: "ChatGPT for Web Developers",
      organization: "LinkedIn Learning",
      date: "July 2025",
      credentialId: "a10bd9b044537ed9fa8dc00b0750c8bdc71600a874c17a9bbe04f089e415285b",
      category: "ai" as const,
      image: "/4.png",
    },
    {
      id: "C-5",
      title: "Introduction to Web Development with ChatGPT",
      organization: "Simplilearn",
      date: "July 2025",
      credentialId: "8553973",
      category: "web" as const,
      image: "/5.png",
    },
    {
      id: "C-6",
      title: "Database Foundations: Intro to Databases",
      organization: "LinkedIn Learning",
      date: "July 2025",
      credentialId: "01dbede123be255290dbe1fbfbb3eff22507223effa14b52294e837f5f6ff995",
      category: "database" as const,
      image: "/6.png",
    },
  ],
  de: [
    {
      id: "C-1",
      title: "Einstieg als Full-Stack Web-Entwickler",
      organization: "LinkedIn Learning",
      date: "September 2024",
      category: "web" as const,
      image: "/1.png",
    },
    {
      id: "C-2",
      title: "Einführung in die Front-End-Entwicklung",
      organization: "Simplilearn",
      date: "März 2025",
      credentialId: "8018740",
      category: "web" as const,
      image: "/2.png",
    },
    {
      id: "C-3",
      title: "React: Erstellen und Hosten einer Full-Stack-Site",
      organization: "LinkedIn Learning",
      date: "Juli 2025",
      credentialId: "d1793b28cccb06b4f62803916eb87805c577a28b954c3058ba844eb5ebea06eb",
      category: "web" as const,
      image: "/3.png",
    },
    {
      id: "C-4",
      title: "ChatGPT für Webentwickler",
      organization: "LinkedIn Learning",
      date: "Juli 2025",
      credentialId: "a10bd9b044537ed9fa8dc00b0750c8bdc71600a874c17a9bbe04f089e415285b",
      category: "ai" as const,
      image: "/4.png",
    },
    {
      id: "C-5",
      title: "Einführung in die Webentwicklung mit ChatGPT",
      organization: "Simplilearn",
      date: "Juli 2025",
      credentialId: "8553973",
      category: "web" as const,
      image: "/5.png",
    },
    {
      id: "C-6",
      title: "Datenbank-Grundlagen: Einführung in Datenbanken",
      organization: "LinkedIn Learning",
      date: "Juli 2025",
      credentialId: "01dbede123be255290dbe1fbfbb3eff22507223effa14b52294e837f5f6ff995",
      category: "database" as const,
      image: "/6.png",
    },
  ]
};

export const getCertifications = (lang: LanguageCode): Certification[] => certificationsData[lang] || certificationsData.en;
export const certifications: Certification[] = certificationsData.en;
