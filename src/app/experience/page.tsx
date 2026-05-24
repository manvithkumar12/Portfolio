import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "Explore Manvith Kumar's professional experience — internships, freelance projects, open-source contributions, and hackathons.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader pageKey="experience" />
      <ExperienceTimeline />
    </>
  );
}
