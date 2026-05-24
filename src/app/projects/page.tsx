import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse Manvith Kumar's portfolio of projects — web applications, full-stack platforms, AI tools, and research projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        pageKey="projects"
        className="!pb-8 md:!pb-12"
      />
      <section className="pb-16 md:pb-32 lg:pb-40">
        <div className="container-wide">
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}
