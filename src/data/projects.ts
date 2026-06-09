import { LanguageCode } from "@/locales";
import { image } from "framer-motion/client";

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
      description:
        "A full-stack AI-driven food ordering platform that delivers personalized meal recommendations based on users' fitness goals, dietary preferences, and nutritional requirements.",
      longDescription: `FitMeals AI is an intelligent food delivery and nutrition management platform designed to help users make healthier eating decisions while enjoying the convenience of online food ordering. The project combines artificial intelligence, nutrition analytics, personalized recommendations, and full-stack web technologies to create a complete ecosystem for healthy lifestyle management.\n    1) The Problem: Traditional food delivery platforms focus primarily on convenience and restaurant availability, often neglecting users' nutritional needs, fitness goals, dietary restrictions, and health objectives. This makes it difficult for individuals to maintain healthy eating habits while ordering food online.\n    2) The Solution: FitMeals AI addresses this challenge by combining food delivery services with AI-powered nutrition intelligence. The platform analyzes user preferences, body metrics, dietary restrictions, and fitness goals to recommend personalized meals that align with individual health requirements.\n    3) Personalized Nutrition Profiles: Users create detailed profiles containing information such as age, weight, height, activity level, fitness goals, allergies, and dietary preferences. The system learns from user behavior and order history to provide increasingly accurate meal recommendations and nutritional guidance.\n    4) AI-Powered Nutrition Finder & Diet Planner: The platform includes a Nutrition Finder that provides detailed nutritional information for food items and a machine learning–based Diet Plan Generator that creates personalized meal plans tailored to calorie requirements, weight goals, and dietary preferences.\n    5) Food Image Recognition & Health Tracking: Users can upload food images for automatic meal identification and nutrition analysis using computer vision technology. The integrated Health Tracker records daily food intake, calorie consumption, and nutritional progress, helping users monitor their health goals effectively.\n    6) Smart Recommendations & Subscription Plans: Advanced recommendation algorithms suggest meals based on nutritional needs, previous orders, and fitness objectives. The platform also offers subscription-based meal plans, allowing users to receive healthy, goal-oriented meals on a regular schedule.\n    7) Multi-Role Platform Management: The application supports Customers, Restaurant Owners, and Delivery Partners through dedicated dashboards. Customers can order and track meals, restaurant owners can manage menus and orders, and delivery partners can handle assigned deliveries efficiently.\n    8) Analytics Dashboard & User Insights: Interactive dashboards provide detailed insights into calorie intake, nutrition balance, meal history, dietary progress, and health performance. Users can visualize trends, track achievements, and make informed decisions about their eating habits.\n    9) Technical Stack & Impact: Built using Next.js, TypeScript, Tailwind CSS, PostgreSQL, REST APIs, and Next.js Server Actions, the platform delivers a modern and scalable user experience. By combining AI, machine learning, nutrition analytics, and food delivery services, FitMeals AI encourages healthier lifestyles, improves dietary awareness, and demonstrates the practical application of intelligent technologies in solving real-world health and nutrition challenges.`,
      image: "/FitMeals-hero.jpeg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Python",
        "Tailwind CSS",
        "PostgreSQL",
        "Supabase",
        "Stripe",
        "REST APIs",
      ],
      category: "web" as const,
      github: "https://github.com/manvithkumar12/Fit-Meals",
      demo: "https://fit-meals-r9yq.vercel.app/en",
      featured: true,
      problem:
        "Many users find it difficult to identify healthy meals that align with their fitness objectives and dietary restrictions. Existing food delivery platforms often provide generic recommendations without considering personalized nutritional needs, calorie goals, allergies, or lifestyle preferences.",
      solution:
        "Developed an AI-powered recommendation engine that analyzes user preferences, fitness goals, and nutritional requirements to suggest personalized meals. The platform provides detailed nutritional insights, secure online ordering through Stripe, multilingual support, and an intuitive user experience for healthier food choices.",
      challenges: [
        "Designing and integrating AI-based meal recommendation workflows",
        "Optimizing database queries for faster product and nutrition data retrieval",
        "Implementing secure payment processing with Stripe",
        "Managing multilingual content and localization",
        "Ensuring responsive performance across desktop and mobile devices",
      ],
      learnings: [
        "Full-stack application development with Next.js and TypeScript",
        "AI integration for personalized recommendation systems",
        "Database design and optimization using PostgreSQL and Supabase",
        "Authentication, payment gateway integration, and API development",
        "Scalable frontend architecture and performance optimization",
      ],
    },
    {
      id: "EcoWatt",
      title: "EcoWatt",
      image: "/ecowatt.png",
      github: "https://github.com/manvithkumar12/EcoWatt",
      description:
        "EcoWatt is an AI-powered energy forecasting platform that predicts household electricity consumption, costs, and carbon emissions using real-world grid and weather data. It provides personalized recommendations to optimize appliance usage, reduce energy bills, and maximize renewable energy utilization.",
      longDescription: `EcoWatt is an intelligent household energy forecasting and optimization platform designed to help users better understand, predict, and manage their electricity consumption. The project combines artificial intelligence, data analytics, weather intelligence, and real-world European energy grid data to provide actionable insights that reduce energy costs and minimize environmental impact.\n    1) The Problem: People often use electricity without knowing when energy is most expensive, when renewable energy availability is highest, or how their daily habits affect their monthly electricity bills and carbon footprint. As a result, many appliances are operated during peak-demand periods, leading to higher costs and increased pressure on the electrical grid.\n    2) The Solution: EcoWatt addresses this challenge by collecting household information, appliance usage patterns, historical consumption records, weather conditions, and energy market data. Using machine learning algorithms, the system analyzes past behavior and predicts future electricity consumption for upcoming days and weeks.\n    3) Personalized Profiles: Users begin by creating a household profile detailing residents, appliance inventory, and usage frequency. The platform learns consumption behavior and builds personalized energy patterns, combining it with weather forecasts and European grid statistics to improve accuracy.\n    4) Forecasting Engine: Utilizes models like Prophet and Scikit-learn to identify trends, seasonal patterns, and consumption behaviors. The model considers factors including time, temperature, cloud cover, renewable energy generation levels, public holidays, and historical electricity consumption.\n    5) Intelligent Optimization: Instead of simply predicting consumption, the platform actively recommends better times to operate energy-intensive appliances by analyzing electricity prices and renewable energy availability to identify cost-efficient and environmentally friendly operating windows.\n    6) Analytics Dashboard: Visualizes energy-related information through interactive charts. Users can monitor consumption trends, compare forecasted versus actual usage, track estimated electricity expenses, and evaluate their carbon footprint over time.\n    7) What-If Simulation: Allows users to experiment with different appliance schedules and immediately see their impact on projected costs and emissions before making changes to their daily routines.\n    8) Technical Stack: Built using a modern full-stack architecture with React, TypeScript, and Material UI for the frontend. The backend uses Node.js and Express.js, with PostgreSQL for data storage. Machine learning models are developed in Python using Pandas, NumPy, Scikit-learn, and Prophet. External APIs (Open-Meteo, ENTSO-E) provide real-time data.\n    9) Sustainability Impact: Contributes to broader sustainability goals by shifting demand away from peak periods and increasing awareness of carbon emissions, helping users participate in the transition toward a cleaner energy ecosystem.`,
      technologies: [
        "Next.js",
        "TypeScript",
        "Python",
        "React Query",
        "Tailwind CSS",
        "PostgreSQL",
        "Supabase",
        "REST APIs",
      ],
      category: "research" as const,
      ongoing: true,
      featured: true,
      problem:
        "Households often lack visibility into their future electricity consumption, energy costs, and carbon emissions. Most consumers use appliances during peak-demand periods without knowing when electricity is cheaper or generated from cleaner renewable sources, leading to higher utility bills, increased environmental impact, and inefficient energy usage.",
      solution:
        "Developed an AI-powered energy forecasting and optimization platform that predicts household electricity consumption, estimated costs, and carbon emissions using historical usage patterns, weather conditions, and European grid data. The system provides personalized recommendations on the most cost-effective and environmentally friendly times to operate appliances, helping users reduce expenses and maximize renewable energy utilization.",
      challenges: [
        "Collecting, cleaning, and processing large-scale energy consumption datasets",
        "Integrating real-time weather and European energy grid data from external APIs",
        "Building accurate time-series forecasting models for household energy consumption",
        "Designing optimization algorithms to identify low-cost and low-carbon appliance schedules",
        "Visualizing complex energy, cost, and sustainability metrics through interactive dashboards",
        "Handling data synchronization and efficient storage of historical consumption records",
      ],
      learnings: [
        "Time-series forecasting using Prophet, Scikit-learn, and machine learning techniques",
        "Data preprocessing, feature engineering, and predictive analytics with Python and Pandas",
        "Integration of external APIs including weather and energy market datasets",
        "Full-stack development using React, TypeScript, Node.js, Express, and PostgreSQL",
        "Building interactive data visualization dashboards with real-time insights",
        "Applying AI and optimization techniques to solve real-world sustainability and energy management challenges",
      ],
    },
    {
      id: "Trinethra",
      title: "Trinethra – AI-Powered Supervisor Feedback Analyzer",
      description:
        "An AI-powered behavioral assessment platform developed as a Software Developer Internship assignment for DeepThought CultureTech. The system analyzes supervisor feedback transcripts, extracts behavioral evidence, evaluates operational maturity, maps KPI impact, and generates structured follow-up questions using a locally running LLM.",
      longDescription: `Trinethra is an AI-powered behavioral assessment tool developed for the DeepThought Software Developer Internship assignment. The platform assists psychology interns in analyzing supervisor feedback transcripts of DT Fellows by leveraging a locally hosted Large Language Model through Ollama.\n
      1) The Problem: Psychology interns manually review lengthy supervisor feedback conversations to evaluate fellow performance, behavioral indicators, operational maturity, and KPI impact. This process can take up to an hour per transcript and requires careful evidence extraction and assessment.\n
      2) The Solution: Trinethra automates the first stage of transcript analysis by generating structured AI-assisted draft assessments in seconds. The system extracts behavioral evidence, identifies performance indicators, evaluates operational maturity, highlights assessment gaps, and suggests follow-up questions while keeping humans in the decision-making loop.\n
      3) Behavioral Evidence Extraction: The platform analyzes transcripts and identifies behavioral signals, communication patterns, accountability indicators, ownership traits, problem-solving approaches, and performance-related evidence from supervisor feedback.\n
      4) Operational Maturity Assessment: Using custom prompting and reasoning workflows, Trinethra evaluates Layer 1 and Layer 2 operational maturity indicators and provides structured rubric-based scoring to support psychological assessments.\n
      5) KPI Mapping & Gap Analysis: The system maps transcript evidence to organizational KPIs, identifies missing information, detects assessment blind spots, and generates targeted follow-up questions to improve evaluation quality.\n
      6) Human-Centered Dashboard: The interface is designed for non-technical users with structured analysis cards, confidence indicators, operational maturity visualizations, assessment warnings, and intuitive information hierarchy.\n
      7) Interactive AI Workflow Visualization: A modern loading experience communicates each analysis stage, including evidence extraction, KPI mapping, reasoning generation, and survivability checks, improving transparency during AI processing.\n
      8) Fully Local AI Execution: Trinethra operates entirely on local infrastructure using Ollama and Llama 3.2, eliminating dependency on external AI APIs while maintaining privacy and control over transcript data.\n
      9) Practical Impact: The platform significantly reduces analysis time while supporting psychology interns with structured draft assessments that can be reviewed, validated, and refined through human expertise rather than replacing professional judgment.`,
      image: "/trinethra-dashboard.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Ollama",
        "Llama 3.2",
        "REST APIs",
      ],
      category: "ai" as const,
      github: "https://github.com/manvithkumar12/trinethra-dashboard",
      featured: true,
      problem:
        "Manual supervisor transcript analysis requires significant effort to identify behavioral evidence, evaluate operational maturity, map KPIs, and generate follow-up questions. Reviewing a single transcript can take up to an hour and demands careful interpretation of qualitative feedback.",
      solution:
        "Built an AI-assisted behavioral assessment platform powered by a locally running LLM using Ollama. The system automatically extracts behavioral evidence, performs rubric-based evaluations, maps KPI impact, identifies assessment gaps, and generates structured follow-up questions while preserving human oversight.",
      challenges: [
        "Designing reliable prompts for behavioral assessment and evidence extraction",
        "Generating consistent rubric-based scoring across different transcripts",
        "Structuring LLM responses into predictable dashboard-ready formats",
        "Handling complex supervisor feedback with nuanced behavioral signals",
        "Building a transparent and user-friendly interface for non-technical psychology interns",
        "Running large language models locally while maintaining acceptable performance",
      ],
      learnings: [
        "Prompt engineering for behavioral analysis and structured reasoning",
        "Integrating Ollama and local LLM workflows into web applications",
        "Building AI-powered dashboards using Next.js and TypeScript",
        "Designing human-in-the-loop AI systems that support rather than replace experts",
        "Structuring and validating AI-generated outputs for real-world workflows",
        "Creating intuitive interfaces for complex analytical processes",
      ],
    },
    {
      id: "GitHub-Profile-Analyzer",
      title:
        "GitHub Profile Analyzer – AI-Powered Developer Profile Evaluation System",
      image: "/github.png",
      demo: "https://github-analyzer-production-049f.up.railway.app",
      github: "https://github.com/manvithkumar12/Github-Analyzer",
      description:
        "An AI-powered GitHub profile analysis platform that evaluates developer profiles, repositories, contributions, and activity metrics using machine learning to generate a comprehensive profile score and performance insights.",

      longDescription: `GitHub Profile Analyzer is an intelligent developer assessment platform designed to analyze GitHub profiles and provide data-driven insights into a developer's coding activity, repository quality, and overall GitHub presence. The project combines machine learning, data analytics, and GitHub API integration to generate meaningful profile evaluations and performance scores.\n
    1) The Problem: Recruiters and developers often rely on manual inspection of GitHub profiles to assess technical activity, project quality, and coding consistency. This process is time-consuming and subjective, making it difficult to compare profiles fairly and efficiently.\n
    2) The Solution: GitHub Profile Analyzer automates profile evaluation by collecting GitHub user data through the GitHub REST API and analyzing repositories, contribution patterns, follower metrics, and account activity. The platform generates an AI-powered profile score and provides actionable insights about developer performance.\n
    3) Profile Data Collection: Users enter a GitHub username, and the platform retrieves profile information including repositories, followers, following, gists, account statistics, contribution activity, programming languages, and project metadata.\n
    4) Machine Learning Scoring Engine: An XGBoost-based machine learning model evaluates multiple profile attributes such as repository quality, contribution frequency, popularity metrics, activity consistency, and coding engagement to generate a custom profile score.\n
    5) Analytics Dashboard: The platform presents profile insights through interactive dashboards and visualizations. Users can analyze repository distributions, language usage, contribution trends, engagement metrics, and overall profile strength.\n
    6) Comparative Analysis: Developers can benchmark their GitHub profiles against common industry standards and identify areas for improvement in open-source contributions, project quality, and community engagement.\n
    7) Performance Recommendations: Based on machine learning predictions, the system provides personalized suggestions to improve profile visibility, repository quality, contribution consistency, and professional GitHub presence.\n
    8) Technical Stack: Built using Node.js, Express.js, HTML, CSS, JavaScript, and Python. The machine learning pipeline utilizes Pandas, NumPy, Scikit-learn, and XGBoost for feature engineering, model training, and profile scoring. GitHub REST APIs are used for real-time profile data retrieval.\n
    9) Practical Impact: The platform enables recruiters, students, and developers to quickly assess GitHub profiles, understand coding activity patterns, and make data-driven decisions using automated AI-powered profile analysis.`,

      technologies: [
        "Node.js",
        "Express.js",
        "Python",
        "XGBoost",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "HTML",
        "CSS",
        "JavaScript",
        "GitHub REST API",
      ],

      category: "ai" as const,
      featured: true,

      problem:
        "Evaluating GitHub profiles manually is time-consuming and subjective. Recruiters and developers often struggle to assess coding activity, repository quality, contribution consistency, and overall developer engagement efficiently.",

      solution:
        "Developed an AI-powered GitHub profile analysis platform that leverages the GitHub REST API and an XGBoost machine learning model to evaluate developer activity, repository quality, contribution patterns, and engagement metrics. The system generates a custom profile score and provides actionable recommendations for profile improvement.",

      challenges: [
        "Collecting and processing GitHub profile data from multiple API endpoints",
        "Engineering meaningful features for developer profile evaluation",
        "Training and optimizing an XGBoost model for profile scoring",
        "Handling missing or inconsistent repository and activity data",
        "Designing intuitive visualizations for profile analytics",
        "Managing API rate limits and real-time data retrieval",
      ],

      learnings: [
        "Machine learning model development using XGBoost and Scikit-learn",
        "Feature engineering and predictive analytics with Python",
        "GitHub REST API integration and data processing workflows",
        "Full-stack web development using Node.js, HTML, CSS, and JavaScript",
        "Building analytics dashboards and performance visualizations",
        "Applying AI techniques to developer assessment and profile analysis",
      ],
    },
  ],
  de: [
    {
      id: "Fit-Meals",
      title: "FitMeals – KI-gestützte Plattform für gesunde Ernährung",
      description:
        "Eine Full-Stack KI-gesteuerte Essensbestellplattform, die personalisierte Mahlzeitenempfehlungen basierend auf Fitnesszielen, Vorlieben und Ernährungsbedürfnissen liefert.",
      longDescription: `FitMeals AI ist eine intelligente Plattform zur Verwaltung von Essenslieferungen und Ernährung...\n(Rest des Textes übersetzt für Kürze)\n1) Das Problem: Traditionelle Lieferplattformen fokussieren sich auf Bequemlichkeit und vernachlässigen Ernährungsbedürfnisse.\n2) Die Lösung: FitMeals AI kombiniert Lebensmittellieferungen mit KI-gestützter Ernährungsintelligenz.\n3) Personalisierte Profile: Benutzer erstellen detaillierte Profile mit Zielen und Allergien.\n4) KI-Ernährungsfinder & Diätplaner: Erstellt personalisierte Speisepläne.\n5) Bilderkennung & Tracking: Erkennt Mahlzeiten durch Bilder und trackt die Gesundheit.\n6) Intelligente Empfehlungen: Fortschrittliche Algorithmen schlagen Mahlzeiten vor.\n7) Multi-Rollen-Plattform: Unterstützt Kunden, Restaurants und Fahrer.\n8) Analytics-Dashboard: Bietet detaillierte Einblicke in Kalorien und Trends.\n9) Tech-Stack: Entwickelt mit Next.js, TypeScript, Tailwind CSS, PostgreSQL.`,
      image: "/FitMeals-hero.jpeg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Python",
        "Tailwind CSS",
        "PostgreSQL",
        "Supabase",
        "Stripe",
        "REST APIs",
      ],
      category: "web" as const,
      github: "https://github.com/manvithkumar12/Fit-Meals",
      demo: "https://fit-meals-r9yq.vercel.app/en",
      featured: true,
      problem:
        "Viele Nutzer finden es schwierig, gesunde Mahlzeiten zu identifizieren, die zu ihren Fitnesszielen und Einschränkungen passen.",
      solution:
        "Entwicklung einer KI-gestützten Empfehlungsmaschine, die Benutzerpräferenzen und Fitnessziele analysiert.",
      challenges: [
        "Entwurf und Integration von KI-basierten Empfehlungs-Workflows",
        "Optimierung von Datenbankabfragen",
        "Sichere Zahlungsabwicklung mit Stripe",
        "Verwaltung mehrsprachiger Inhalte",
        "Sicherstellung von responsivem Design auf allen Geräten",
      ],
      learnings: [
        "Full-Stack Anwendungsentwicklung mit Next.js und TypeScript",
        "KI-Integration für personalisierte Empfehlungssysteme",
        "Datenbankdesign mit PostgreSQL",
        "Authentifizierung und API-Entwicklung",
        "Skalierbare Frontend-Architektur",
      ],
    },
    {
      id: "EcoWatt",
      title: "EcoWatt",
      description:
        "EcoWatt ist eine KI-gestützte Plattform zur Energieprognose, die den Stromverbrauch und CO2-Emissionen von Haushalten vorhersagt und Empfehlungen gibt.",
      longDescription: `EcoWatt ist eine intelligente Plattform zur Vorhersage und Optimierung des Energieverbrauchs in Haushalten...\n1) Das Problem: Oftmals ist unklar, wann Energie am günstigsten oder umweltfreundlichsten ist.\n2) Die Lösung: Nutzung von KI zur Vorhersage des Verbrauchs.\n3) Personalisierte Profile: Lernt das Verbrauchsverhalten des Haushalts.\n4) Prognose-Engine: Nutzt Modelle wie Prophet zur Erkennung von Trends.\n5) Intelligente Optimierung: Empfiehlt die besten Zeiten für den Betrieb von Geräten.\n6) Analytics-Dashboard: Visualisiert Energiedaten interaktiv.\n7) Was-wäre-wenn-Simulation: Erlaubt das Testen von Gerätezeitplänen.\n8) Tech-Stack: React, TypeScript, Node.js, Python, PostgreSQL.\n9) Nachhaltigkeit: Trägt zur Senkung von Spitzenlasten bei.`,
      technologies: [
        "Next.js",
        "TypeScript",
        "Python",
        "React Query",
        "Tailwind CSS",
        "PostgreSQL",
        "Supabase",
        "REST APIs",
      ],
      category: "research" as const,
      ongoing: true,
      featured: true,
      image: "/ecowatt.png",
      github: "https://github.com/manvithkumar12/EcoWatt",
      problem:
        "Haushalten fehlt oft der Einblick in ihren zukünftigen Stromverbrauch und die Kosten.",
      solution:
        "Entwicklung einer KI-gestützten Plattform zur Energieprognose, die Kosten und Emissionen vorhersagt.",
      challenges: [
        "Verarbeitung großer Datensätze zum Energieverbrauch",
        "Integration von Echtzeit-Wetterdaten",
        "Erstellung genauer Zeitreihenvorhersagemodelle",
        "Entwurf von Optimierungsalgorithmen",
        "Visualisierung komplexer Kennzahlen",
        "Datensynchronisation und Speicherung",
      ],
      learnings: [
        "Zeitreihenvorhersage mit maschinellem Lernen",
        "Datenvorverarbeitung und Feature-Engineering",
        "Integration externer APIs",
        "Full-Stack Entwicklung mit React, Node.js, PostgreSQL",
        "Aufbau interaktiver Dashboards",
        "Anwendung von KI zur Lösung von Nachhaltigkeitsproblemen",
      ],
    },
    {
      id: "Trinethra",
      title: "Trinethra – KI-gestützter Analysator für Supervisor-Feedback",
      description:
        "Eine KI-gestützte Plattform zur Verhaltensbewertung, die als Aufgabe für ein Softwareentwickler-Praktikum bei DeepThought CultureTech entwickelt wurde. Das System analysiert Supervisor-Feedback-Transkripte, extrahiert Verhaltensnachweise, bewertet die operative Reife, bildet KPI-Auswirkungen ab und generiert strukturierte Folgefragen unter Verwendung eines lokal ausgeführten LLMs.",
      longDescription: `Trinethra ist ein KI-gestütztes Tool zur Verhaltensbewertung, das für die DeepThought-Softwareentwickler-Praktikumsaufgabe entwickelt wurde. Die Plattform unterstützt Psychologie-Praktikanten bei der Analyse von Supervisor-Feedback-Transkripten von DT-Fellows, indem sie ein lokal gehostetes Large Language Model über Ollama nutzt.\n
1) Das Problem: Psychologie-Praktikanten überprüfen manuell lange Supervisor-Feedback-Gespräche, um die Leistung, Verhaltensindikatoren, operative Reife und KPI-Auswirkungen der Fellows zu bewerten. Dieser Prozess kann bis zu einer Stunde pro Transkript dauern und erfordert sorgfältige Beweisextraktion und Bewertung.\n
2) Die Lösung: Trinethra automatisiert die erste Phase der Transkriptanalyse durch die Erstellung strukturierter, KI-gestützter Entwurfsbewertungen in Sekunden. Das System extrahiert Verhaltensnachweise, identifiziert Leistungsindikatoren, bewertet die operative Reife, hebt Bewertungslücken hervor und schlägt Folgefragen vor, während der Mensch im Entscheidungsprozess bleibt.\n
3) Extraktion von Verhaltensnachweisen: Die Plattform analysiert Transkripte und identifiziert Verhaltenssignale, Kommunikationsmuster, Verantwortungsindikatoren, Eigenverantwortungsmerkmale, Problemlösungsansätze und leistungsbezogene Nachweise aus dem Supervisor-Feedback.\n
4) Bewertung der operativen Reife: Mithilfe benutzerdefinierter Prompting- und Reasoning-Workflows bewertet Trinethra Indikatoren für die operative Reife der Ebene 1 und 2 und bietet strukturierte rubrikbasierte Bewertungen zur Unterstützung psychologischer Beurteilungen.\n
5) KPI-Mapping & Lückenanalyse: Das System verknüpft Transkriptnachweise mit organisatorischen KPIs, identifiziert fehlende Informationen, erkennt Bewertungslücken und generiert gezielte Folgefragen zur Verbesserung der Bewertungsqualität.\n
6) Mensch-zentriertes Dashboard: Die Benutzeroberfläche ist für nicht-technische Benutzer konzipiert und bietet strukturierte Analysekarten, Konfidenzindikatoren, Visualisierungen der operativen Reife, Bewertungswarnungen und eine intuitive Informationshierarchie.\n
7) Interaktive Visualisierung von KI-Workflows: Eine moderne Ladeerfahrung kommuniziert jede Analysephase, einschließlich Beweisextraktion, KPI-Mapping, Argumentationsgenerierung und Überlebensfähigkeitsprüfungen, was die Transparenz während der KI-Verarbeitung verbessert.\n
8) Vollständig lokale KI-Ausführung: Trinethra läuft vollständig auf lokaler Infrastruktur unter Verwendung von Ollama und Llama 3.2, wodurch Abhängigkeiten von externen KI-APIs beseitigt werden, während Privatsphäre und Kontrolle über Transkriptdaten gewahrt bleiben.\n
9) Praktische Auswirkungen: Die Plattform reduziert die Analysezeit erheblich und unterstützt gleichzeitig Psychologie-Praktikanten mit strukturierten Entwurfsbewertungen, die durch menschliches Fachwissen überprüft, validiert und verfeinert werden können, anstatt professionelles Urteilsvermögen zu ersetzen.`,
      image: "/trinethra-dashboard.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Ollama",
        "Llama 3.2",
        "REST APIs",
      ],
      category: "ai" as const,
      github: "https://github.com/manvithkumar12/trinethra-dashboard",
      featured: true,
      problem:
        "Die manuelle Analyse von Supervisor-Transkripten erfordert erheblichen Aufwand, um Verhaltensnachweise zu identifizieren, die operative Reife zu bewerten, KPIs abzubilden und Folgefragen zu generieren. Die Überprüfung eines einzelnen Transkripts kann bis zu einer Stunde dauern und erfordert eine sorgfältige Interpretation von qualitativem Feedback.",
      solution:
        "Aufbau einer KI-gestützten Plattform zur Verhaltensbewertung, die durch ein lokal laufendes LLM mit Ollama angetrieben wird. Das System extrahiert automatisch Verhaltensnachweise, führt rubrikbasierte Bewertungen durch, bildet KPI-Auswirkungen ab, identifiziert Bewertungslücken und generiert strukturierte Folgefragen, während die menschliche Aufsicht erhalten bleibt.",
      challenges: [
        "Entwurf zuverlässiger Prompts zur Verhaltensbewertung und Beweisextraktion",
        "Generierung konsistenter rubrikbasierter Bewertungen über verschiedene Transkripte hinweg",
        "Strukturierung von LLM-Antworten in vorhersehbare, dashboard-fertige Formate",
        "Umgang mit komplexem Supervisor-Feedback mit nuancierten Verhaltenssignalen",
        "Aufbau einer transparenten und benutzerfreundlichen Oberfläche für nicht-technische Psychologie-Praktikanten",
        "Ausführen großer Sprachmodelle lokal bei gleichzeitiger Aufrechterhaltung akzeptabler Leistung",
      ],
      learnings: [
        "Prompt Engineering für Verhaltensanalyse und strukturiertes Reasoning",
        "Integration von Ollama und lokalen LLM-Workflows in Webanwendungen",
        "Aufbau von KI-gestützten Dashboards mit Next.js und TypeScript",
        "Entwurf von Human-in-the-Loop KI-Systemen, die Experten unterstützen, anstatt sie zu ersetzen",
        "Strukturierung und Validierung von KI-generierten Ausgaben für reale Workflows",
        "Erstellung intuitiver Schnittstellen für komplexe Analyseprozesse",
      ],
    },
    {
      id: "GitHub-Profile-Analyzer",
      title:
        "GitHub Profile Analyzer – KI-gestütztes System zur Bewertung von Entwicklerprofilen",
      demo: "https://github-analyzer-production-049f.up.railway.app/",
      description:
        "Eine KI-gestützte Plattform zur Analyse von GitHub-Profilen, die Entwicklerprofile, Repositories, Beiträge und Aktivitätsmetriken mithilfe von Machine Learning auswertet und einen umfassenden Profil-Score sowie Leistungsanalysen erstellt.",
      image: "/github.png",
      github: "https://github.com/manvithkumar12/Github-Analyzer",
      longDescription: `GitHub Profile Analyzer ist eine intelligente Plattform zur Bewertung von Entwicklerprofilen, die GitHub-Profile analysiert und datenbasierte Einblicke in die Programmieraktivität, Repository-Qualität und die allgemeine GitHub-Präsenz eines Entwicklers liefert. Das Projekt kombiniert Machine Learning, Datenanalyse und die Integration der GitHub-API, um aussagekräftige Profilbewertungen und Leistungskennzahlen zu erzeugen.\n
1) Das Problem: Recruiter und Entwickler verlassen sich häufig auf die manuelle Überprüfung von GitHub-Profilen, um technische Aktivitäten, Projektqualität und die Konsistenz von Beiträgen zu bewerten. Dieser Prozess ist zeitaufwendig und subjektiv.\n
2) Die Lösung: GitHub Profile Analyzer automatisiert die Profilbewertung, indem Daten über die GitHub REST API gesammelt und Repositories, Beitragsmuster, Follower-Metriken sowie Kontoaktivitäten analysiert werden. Anschließend wird ein KI-gestützter Profil-Score erstellt.\n
3) Datenerfassung: Benutzer geben einen GitHub-Benutzernamen ein. Das System ruft Informationen wie Repositories, Follower, Following, Gists, Aktivitätsdaten, Programmiersprachen und Projektmetriken ab.\n
4) Machine-Learning-Bewertung: Ein XGBoost-Modell bewertet verschiedene Profilmerkmale wie Repository-Qualität, Beitragshäufigkeit, Popularität, Aktivitätskonsistenz und Entwicklerengagement.\n
5) Analyse-Dashboard: Die Plattform visualisiert Repository-Verteilungen, Sprachstatistiken, Aktivitätstrends und weitere Leistungskennzahlen in interaktiven Dashboards.\n
6) Vergleichsanalyse: Entwickler können ihre Profile mit allgemeinen Branchenstandards vergleichen und Verbesserungspotenziale identifizieren.\n
7) Personalisierte Empfehlungen: Basierend auf den Ergebnissen des Machine-Learning-Modells werden Vorschläge zur Verbesserung der GitHub-Präsenz und Projektqualität generiert.\n
8) Tech-Stack: Entwickelt mit Node.js, Express.js, HTML, CSS, JavaScript und Python. Die Machine-Learning-Pipeline nutzt Pandas, NumPy, Scikit-learn und XGBoost. Die GitHub REST API liefert die Profildaten in Echtzeit.\n
9) Praktischer Nutzen: Die Plattform unterstützt Recruiter, Studierende und Entwickler bei der schnellen und objektiven Bewertung von GitHub-Profilen durch automatisierte KI-gestützte Analysen.`,

      technologies: [
        "Node.js",
        "Express.js",
        "Python",
        "XGBoost",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "HTML",
        "CSS",
        "JavaScript",
        "GitHub REST API",
      ],

      category: "ai" as const,
      featured: true,

      problem:
        "Die manuelle Bewertung von GitHub-Profilen ist zeitaufwendig und subjektiv. Recruiter und Entwickler haben oft Schwierigkeiten, Aktivität, Repository-Qualität und Engagement effizient zu bewerten.",

      solution:
        "Entwicklung einer KI-gestützten Plattform zur Analyse von GitHub-Profilen, die die GitHub REST API und ein XGBoost-Modell nutzt, um Aktivitätsmuster, Repository-Qualität und Entwicklerengagement zu bewerten und einen individuellen Profil-Score zu erzeugen.",

      challenges: [
        "Erfassung und Verarbeitung von GitHub-Daten aus mehreren API-Endpunkten",
        "Entwicklung aussagekräftiger Features für die Profilbewertung",
        "Training und Optimierung eines XGBoost-Modells",
        "Umgang mit fehlenden oder inkonsistenten Repository-Daten",
        "Entwurf intuitiver Visualisierungen für Profilanalysen",
        "Verwaltung von API-Limits und Echtzeit-Datenabrufen",
      ],

      learnings: [
        "Entwicklung von Machine-Learning-Modellen mit XGBoost und Scikit-learn",
        "Feature Engineering und Predictive Analytics mit Python",
        "Integration und Verarbeitung von Daten über die GitHub REST API",
        "Full-Stack-Webentwicklung mit Node.js, HTML, CSS und JavaScript",
        "Aufbau interaktiver Analyse-Dashboards",
        "Anwendung von KI-Techniken zur Bewertung von Entwicklerprofilen",
      ],
    },
  ],
};

export const getProjects = (lang: LanguageCode): Project[] =>
  projectsData[lang] || projectsData.en;
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
