import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import {
  ValuePropositions,
  HireStats,
  TestimonialsSection,
  HireCTA,
} from "@/components/why-hire-me/WhyHireMeSections";

export const metadata: Metadata = {
  title: "Why Hire Me",
  description: "Discover why Manvith Kumar is the right fit — problem solver, fast learner, research mindset, and modern development expertise.",
};

export default function WhyHireMePage() {
  return (
    <>
      <PageHeader
        label="Why Me"
        title="Why Work With Me?"
        subtitle="The skills, mindset, and values I bring to every project and collaboration."
      />
      <ValuePropositions />
      <HireStats />
      <TestimonialsSection />
      <HireCTA />
    </>
  );
}
