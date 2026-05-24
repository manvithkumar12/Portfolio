import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Manvith Kumar — Full Stack Developer & CS Student",
    template: "%s | Manvith Kumar",
  },
  description:
    "Portfolio of Manvith Kumar — Computer Science Engineering student and Full Stack Developer. Building scalable web applications, AI-powered systems, and modern digital experiences.",
  keywords: [
    "Manvith Kumar",
    "Full Stack Developer",
    "Computer Science",
    "Portfolio",
    "Web Developer",
    "React",
    "Next.js",
    "AI",
    "Machine Learning",
    "Germany",
    "University",
  ],
  authors: [{ name: "Manvith Kumar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Manvith Kumar — Full Stack Developer & CS Student",
    description:
      "Building scalable web applications, AI-powered systems, and modern digital experiences.",
    siteName: "Manvith Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manvith Kumar — Full Stack Developer & CS Student",
    description:
      "Building scalable web applications, AI-powered systems, and modern digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { LanguageProvider } from "@/providers/LanguageProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
