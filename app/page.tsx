import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
    </main>
  );
}
