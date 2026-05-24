import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { AboutHero, JourneyTimeline, CoreValues } from "@/components/about/AboutSections";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Manvith Kumar — his academic journey, passions, research aspirations, and goals for studying in Germany.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader pageKey="about" />
      <AboutHero />
      <JourneyTimeline />
      <CoreValues />
    </>
  );
}
