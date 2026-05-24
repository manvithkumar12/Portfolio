import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SkillDashboard } from "@/components/skills/SkillDashboard";

export const metadata: Metadata = {
  title: "Skills",
  description: "Explore Manvith Kumar's technical skills — frontend, backend, databases, AI/ML, tools, and soft skills with proficiency levels.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader pageKey="skills" />
      <SkillDashboard />
    </>
  );
}
