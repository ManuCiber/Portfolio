import { AboutMe } from "@/components/AboutMe";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { ExperienceSection } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      <main>
        <HeroSection/>
        <AboutMe/>
        <SkillsSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        
      </main>
      <Footer/>
    </div>
  );
}