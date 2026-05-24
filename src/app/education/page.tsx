import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { EducationTimeline } from "@/components/education/EducationTimeline";

export const metadata: Metadata = {
  title: "Education",
  description: "Explore Manvith Kumar's academic background, degrees, and key coursework.",
};

export default function EducationPage() {
  return (
    <>
      <PageHeader pageKey="education" />
      <EducationTimeline />
    </>
  );
}
