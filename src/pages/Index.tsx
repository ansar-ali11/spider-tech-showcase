import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import GitHubSection from "@/components/GitHubSection";
import LeetCodeSection from "@/components/LeetCodeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SpideyIntro from "@/components/SpideyIntro";
import WebDecoration from "@/components/WebDecoration";
import SpiderScrollAnimation from "@/components/SpiderScrollAnimation";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SpideyIntro onComplete={handleIntroComplete} />
      {introComplete && (
        <>
          <WebDecoration />
          <SpiderScrollAnimation />
          <Navbar />
          <HeroSection />
          <SectionDivider variant="red" />
          <AboutSection />
          <SectionDivider variant="blue" />
          <ServicesSection />
          <SectionDivider variant="red" />
          <SkillsSection />
          <SectionDivider variant="blue" />
          <ProjectsSection />
          <SectionDivider variant="red" />
          <GitHubSection />
          <SectionDivider variant="blue" />
          <LeetCodeSection />
          <SectionDivider variant="red" />
          <CertificatesSection />
          <SectionDivider variant="blue" />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
