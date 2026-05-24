import { LanguageCode } from "@/locales";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  technologies: string[];
  category: "web" | "fullstack" | "ai" | "research" | "academic" | "opensource";
  github?: string;
  demo?: string;
  ongoing?: boolean;
  featured: boolean;
  problem?: string;
  solution?: string;
  challenges?: string[];
  learnings?: string[];
}

const projectsData = {
  en: [
    {
      id: "Fit-Meals",
      title: "FitMeals – AI-Powered Healthy Food & Nutrition Platform",
      description: "A full-stack AI-driven food ordering platform that delivers personalized meal recommendations based on users' fitness goals, dietary preferences, and nutritional requirements.",
      longDescription: `FitMeals AI is an intelligent food delivery and nutrition management platform designed to help users make healthier eating decisions while enjoying the convenience of online food ordering. The project combines artificial intelligence, nutrition analytics, personalized recommendations, and full-stack web technologies to create a complete ecosystem for healthy lifestyle management.\n    1) The Problem: Traditional food delivery platforms focus primarily on convenience and restaurant availability, often neglecting users' nutritional needs, fitness goals, dietary restrictions, and health objectives. This makes it difficult for individuals to maintain healthy eating habits while ordering food online.\n    2) The Solution: FitMeals AI addresses this challenge by combining food delivery services with AI-powered nutrition intelligence. The platform analyzes user preferences, body metrics, dietary restrictions, and fitness goals to recommend personalized meals that align with individual health requirements.\n    3) Personalized Nutrition Profiles: Users create detailed profiles containing information such as age, weight, height, activity level, fitness goals, allergies, and dietary preferences. The system learns from user behavior and order history to provide increasingly accurate meal recommendations and nutritional guidance.\n    4) AI-Powered Nutrition Finder & Diet Planner: The platform includes a Nutrition Finder that provides detailed nutritional information for food items and a machine learning–based Diet Plan Generator that creates personalized meal plans tailored to calorie requirements, weight goals, and dietary preferences.\n    5) Food Image Recognition & Health Tracking: Users can upload food images for automatic meal identification and nutrition analysis using computer vision technology. The integrated Health Tracker records daily food intake, calorie consumption, and nutritional progress, helping users monitor their health goals effectively.\n    6) Smart Recommendations & Subscription Plans: Advanced recommendation algorithms suggest meals based on nutritional needs, previous orders, and fitness objectives. The platform also offers subscription-based meal plans, allowing users to receive healthy, goal-oriented meals on a regular schedule.\n    7) Multi-Role Platform Management: The application supports Customers, Restaurant Owners, and Delivery Partners through dedicated dashboards. Customers can order and track meals, restaurant owners can manage menus and orders, and delivery partners can handle assigned deliveries efficiently.\n    8) Analytics Dashboard & User Insights: Interactive dashboards provide detailed insights into calorie intake, nutrition balance, meal history, dietary progress, and health performance. Users can visualize trends, track achievements, and make informed decisions about their eating habits.\n    9) Technical Stack & Impact: Built using Next.js, TypeScript, Tailwind CSS, PostgreSQL, REST APIs, and Next.js Server Actions, the platform delivers a modern and scalable user experience. By combining AI, machine learning, nutrition analytics, and food delivery services, FitMeals AI encourages healthier lifestyles, improves dietary awareness, and demonstrates the practical application of intelligent technologies in solving real-world health and nutrition challenges.`,
      image: "/FitMeals-hero.jpeg",
      technologies: ["Next.js", "TypeScript", "Python", "Tailwind CSS", "PostgreSQL", "Supabase", "Stripe", "REST APIs"],
      category: "web" as const,
      github: "https://github.com/manvithkumar12/Fit-Meals",
      demo: "https://fit-meals-r9yq.vercel.app/en",
      featured: true,
      problem: "Many users find it difficult to identify healthy meals that align with their fitness objectives and dietary restrictions. Existing food delivery platforms often provide generic recommendations without considering personalized nutritional needs, calorie goals, allergies, or lifestyle preferences.",
      solution: "Developed an AI-powered recommendation engine that analyzes user preferences, fitness goals, and nutritional requirements to suggest personalized meals. The platform provides detailed nutritional insights, secure online ordering through Stripe, multilingual support, and an intuitive user experience for healthier food choices.",
      challenges: [
        "Designing and integrating AI-based meal recommendation workflows",
        "Optimizing database queries for faster product and nutrition data retrieval",
        "Implementing secure payment processing with Stripe",
        "Managing multilingual content and localization",
        "Ensuring responsive performance across desktop and mobile devices"
      ],
      learnings: [
        "Full-stack application development with Next.js and TypeScript",
        "AI integration for personalized recommendation systems",
        "Database design and optimization using PostgreSQL and Supabase",
        "Authentication, payment gateway integration, and API development",
        "Scalable frontend architecture and performance optimization"
      ],
    },
    {
      id: "EcoWatt",
      title: "EcoWatt",
      description: "GridSense AI is an AI-powered energy forecasting platform that predicts household electricity consumption, costs, and carbon emissions using real-world grid and weather data. It provides personalized recommendations to optimize appliance usage, reduce energy bills, and maximize renewable energy utilization.",
      longDescription: `GridSense AI is an intelligent household energy forecasting and optimization platform designed to help users better understand, predict, and manage their electricity consumption. The project combines artificial intelligence, data analytics, weather intelligence, and real-world European energy grid data to provide actionable insights that reduce energy costs and minimize environmental impact.\n    1) The Problem: People often use electricity without knowing when energy is most expensive, when renewable energy availability is highest, or how their daily habits affect their monthly electricity bills and carbon footprint. As a result, many appliances are operated during peak-demand periods, leading to higher costs and increased pressure on the electrical grid.\n    2) The Solution: GridSense AI addresses this challenge by collecting household information, appliance usage patterns, historical consumption records, weather conditions, and energy market data. Using machine learning algorithms, the system analyzes past behavior and predicts future electricity consumption for upcoming days and weeks.\n    3) Personalized Profiles: Users begin by creating a household profile detailing residents, appliance inventory, and usage frequency. The platform learns consumption behavior and builds personalized energy patterns, combining it with weather forecasts and European grid statistics to improve accuracy.\n    4) Forecasting Engine: Utilizes models like Prophet and Scikit-learn to identify trends, seasonal patterns, and consumption behaviors. The model considers factors including time, temperature, cloud cover, renewable energy generation levels, public holidays, and historical electricity consumption.\n    5) Intelligent Optimization: Instead of simply predicting consumption, the platform actively recommends better times to operate energy-intensive appliances by analyzing electricity prices and renewable energy availability to identify cost-efficient and environmentally friendly operating windows.\n    6) Analytics Dashboard: Visualizes energy-related information through interactive charts. Users can monitor consumption trends, compare forecasted versus actual usage, track estimated electricity expenses, and evaluate their carbon footprint over time.\n    7) What-If Simulation: Allows users to experiment with different appliance schedules and immediately see their impact on projected costs and emissions before making changes to their daily routines.\n    8) Technical Stack: Built using a modern full-stack architecture with React, TypeScript, and Material UI for the frontend. The backend uses Node.js and Express.js, with PostgreSQL for data storage. Machine learning models are developed in Python using Pandas, NumPy, Scikit-learn, and Prophet. External APIs (Open-Meteo, ENTSO-E) provide real-time data.\n    9) Sustainability Impact: Contributes to broader sustainability goals by shifting demand away from peak periods and increasing awareness of carbon emissions, helping users participate in the transition toward a cleaner energy ecosystem.`,
      technologies: ["Next.js", "TypeScript", "Python", "React Query", "Tailwind CSS", "PostgreSQL", "Supabase", "REST APIs"],
      category: "research" as const,
      ongoing: true,
      featured: true,
      problem: "Households often lack visibility into their future electricity consumption, energy costs, and carbon emissions. Most consumers use appliances during peak-demand periods without knowing when electricity is cheaper or generated from cleaner renewable sources, leading to higher utility bills, increased environmental impact, and inefficient energy usage.",
      solution: "Developed an AI-powered energy forecasting and optimization platform that predicts household electricity consumption, estimated costs, and carbon emissions using historical usage patterns, weather conditions, and European grid data. The system provides personalized recommendations on the most cost-effective and environmentally friendly times to operate appliances, helping users reduce expenses and maximize renewable energy utilization.",
      challenges: [
        "Collecting, cleaning, and processing large-scale energy consumption datasets",
        "Integrating real-time weather and European energy grid data from external APIs",
        "Building accurate time-series forecasting models for household energy consumption",
        "Designing optimization algorithms to identify low-cost and low-carbon appliance schedules",
        "Visualizing complex energy, cost, and sustainability metrics through interactive dashboards",
        "Handling data synchronization and efficient storage of historical consumption records"
      ],
      learnings: [
        "Time-series forecasting using Prophet, Scikit-learn, and machine learning techniques",
        "Data preprocessing, feature engineering, and predictive analytics with Python and Pandas",
        "Integration of external APIs including weather and energy market datasets",
        "Full-stack development using React, TypeScript, Node.js, Express, and PostgreSQL",
        "Building interactive data visualization dashboards with real-time insights",
        "Applying AI and optimization techniques to solve real-world sustainability and energy management challenges"
      ],
    }
  ],
  de: [
    {
      id: "Fit-Meals",
      title: "FitMeals – KI-gestützte Plattform für gesunde Ernährung",
      description: "Eine Full-Stack KI-gesteuerte Essensbestellplattform, die personalisierte Mahlzeitenempfehlungen basierend auf Fitnesszielen, Vorlieben und Ernährungsbedürfnissen liefert.",
      longDescription: `FitMeals AI ist eine intelligente Plattform zur Verwaltung von Essenslieferungen und Ernährung...\n(Rest des Textes übersetzt für Kürze)\n1) Das Problem: Traditionelle Lieferplattformen fokussieren sich auf Bequemlichkeit und vernachlässigen Ernährungsbedürfnisse.\n2) Die Lösung: FitMeals AI kombiniert Lebensmittellieferungen mit KI-gestützter Ernährungsintelligenz.\n3) Personalisierte Profile: Benutzer erstellen detaillierte Profile mit Zielen und Allergien.\n4) KI-Ernährungsfinder & Diätplaner: Erstellt personalisierte Speisepläne.\n5) Bilderkennung & Tracking: Erkennt Mahlzeiten durch Bilder und trackt die Gesundheit.\n6) Intelligente Empfehlungen: Fortschrittliche Algorithmen schlagen Mahlzeiten vor.\n7) Multi-Rollen-Plattform: Unterstützt Kunden, Restaurants und Fahrer.\n8) Analytics-Dashboard: Bietet detaillierte Einblicke in Kalorien und Trends.\n9) Tech-Stack: Entwickelt mit Next.js, TypeScript, Tailwind CSS, PostgreSQL.`,
      image: "/FitMeals-hero.jpeg",
      technologies: ["Next.js", "TypeScript", "Python", "Tailwind CSS", "PostgreSQL", "Supabase", "Stripe", "REST APIs"],
      category: "web" as const,
      github: "https://github.com/manvithkumar12/Fit-Meals",
      demo: "https://fit-meals-r9yq.vercel.app/en",
      featured: true,
      problem: "Viele Nutzer finden es schwierig, gesunde Mahlzeiten zu identifizieren, die zu ihren Fitnesszielen und Einschränkungen passen.",
      solution: "Entwicklung einer KI-gestützten Empfehlungsmaschine, die Benutzerpräferenzen und Fitnessziele analysiert.",
      challenges: [
        "Entwurf und Integration von KI-basierten Empfehlungs-Workflows",
        "Optimierung von Datenbankabfragen",
        "Sichere Zahlungsabwicklung mit Stripe",
        "Verwaltung mehrsprachiger Inhalte",
        "Sicherstellung von responsivem Design auf allen Geräten"
      ],
      learnings: [
        "Full-Stack Anwendungsentwicklung mit Next.js und TypeScript",
        "KI-Integration für personalisierte Empfehlungssysteme",
        "Datenbankdesign mit PostgreSQL",
        "Authentifizierung und API-Entwicklung",
        "Skalierbare Frontend-Architektur"
      ],
    },
    {
      id: "EcoWatt",
      title: "EcoWatt",
      description: "GridSense AI ist eine KI-gestützte Plattform zur Energieprognose, die den Stromverbrauch und CO2-Emissionen von Haushalten vorhersagt und Empfehlungen gibt.",
      longDescription: `GridSense AI ist eine intelligente Plattform zur Vorhersage und Optimierung des Energieverbrauchs in Haushalten...\n1) Das Problem: Oftmals ist unklar, wann Energie am günstigsten oder umweltfreundlichsten ist.\n2) Die Lösung: Nutzung von KI zur Vorhersage des Verbrauchs.\n3) Personalisierte Profile: Lernt das Verbrauchsverhalten des Haushalts.\n4) Prognose-Engine: Nutzt Modelle wie Prophet zur Erkennung von Trends.\n5) Intelligente Optimierung: Empfiehlt die besten Zeiten für den Betrieb von Geräten.\n6) Analytics-Dashboard: Visualisiert Energiedaten interaktiv.\n7) Was-wäre-wenn-Simulation: Erlaubt das Testen von Gerätezeitplänen.\n8) Tech-Stack: React, TypeScript, Node.js, Python, PostgreSQL.\n9) Nachhaltigkeit: Trägt zur Senkung von Spitzenlasten bei.`,
      technologies: ["Next.js", "TypeScript", "Python", "React Query", "Tailwind CSS", "PostgreSQL", "Supabase", "REST APIs"],
      category: "research" as const,
      ongoing: true,
      featured: true,
      problem: "Haushalten fehlt oft der Einblick in ihren zukünftigen Stromverbrauch und die Kosten.",
      solution: "Entwicklung einer KI-gestützten Plattform zur Energieprognose, die Kosten und Emissionen vorhersagt.",
      challenges: [
        "Verarbeitung großer Datensätze zum Energieverbrauch",
        "Integration von Echtzeit-Wetterdaten",
        "Erstellung genauer Zeitreihenvorhersagemodelle",
        "Entwurf von Optimierungsalgorithmen",
        "Visualisierung komplexer Kennzahlen",
        "Datensynchronisation und Speicherung"
      ],
      learnings: [
        "Zeitreihenvorhersage mit maschinellem Lernen",
        "Datenvorverarbeitung und Feature-Engineering",
        "Integration externer APIs",
        "Full-Stack Entwicklung mit React, Node.js, PostgreSQL",
        "Aufbau interaktiver Dashboards",
        "Anwendung von KI zur Lösung von Nachhaltigkeitsproblemen"
      ],
    }
  ]
};

export const getProjects = (lang: LanguageCode): Project[] => projectsData[lang] || projectsData.en;
export const projects: Project[] = projectsData.en;

export const projectCategories = [
  { value: "all", label: "All" },
  { value: "web", label: "Web Development" },
  { value: "fullstack", label: "Full Stack" },
  { value: "ai", label: "AI" },
  { value: "research", label: "Research" },
  { value: "academic", label: "Academic" },
  { value: "opensource", label: "Open Source" },
] as const;

export const getProjectCategories = (lang: LanguageCode) => {
  if (lang === "de") {
    return [
      { value: "all", label: "Alle" },
      { value: "web", label: "Webentwicklung" },
      { value: "fullstack", label: "Full Stack" },
      { value: "ai", label: "KI" },
      { value: "research", label: "Forschung" },
      { value: "academic", label: "Akademisch" },
      { value: "opensource", label: "Open Source" },
    ];
  }
  return projectCategories;
};
