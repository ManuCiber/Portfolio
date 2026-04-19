import { AboutMe } from "@/components/AboutMe";
import { ExperienceSection } from "@/components/Experience";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
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
      </main>
    </div>
  );
}