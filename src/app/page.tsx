// FULL CODE FOR: src/app/page.tsx with Animations

import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <FinalCtaSection />
    </>
  );
}
