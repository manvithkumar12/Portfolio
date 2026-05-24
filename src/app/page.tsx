import { HeroSection } from "@/components/home/HeroSection";
import { MetricsBar } from "@/components/home/MetricsBar";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TechMarquee } from "@/components/home/TechMarquee";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsBar />
      <FeaturedProjects />
      <TechMarquee />
    </>
  );
}
