export const siteConfig = {
  name: "Manvith Kumar",
  title: "Manvith Kumar — Full Stack Developer & CS Student",
  description:
    "Portfolio of Manvith Kumar — Computer Science Engineering student and Full Stack Developer. Building scalable web applications, AI-powered systems, and modern digital experiences.",
  url: "https://manvithkumar.dev",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/manvithkumar",
    linkedin: "https://linkedin.com/in/manvithkumar",
    email: "manvithkumar@email.com",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
] as const;

export const metrics = [
  { value: 7, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "+", label: "Years Learning Journey" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 1000, suffix: "+", label: "Hours Coding" },
] as const;

export const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/manvithkumar",
    icon: "Github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/manvithkumar",
    icon: "Linkedin",
  },
  {
    label: "Email",
    href: "mailto:manvithkumar@email.com",
    icon: "Mail",
  },
] as const;
