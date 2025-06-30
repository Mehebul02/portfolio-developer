import About from "@/components/about/About";
import ContactSection from "@/components/contact/Contact-Section";
import HeroSection from "@/components/heroSection/Hero-Section";
import SkillSection from "@/components/skills/Skils-Section";
import WorkProcess from "@/components/workProcess/Work-process";

export default function Home() {
  return (
    <div>
     <HeroSection/>
     <SkillSection/>
     <About/>
     <WorkProcess/>
     <ContactSection/>
     <FooterSection/>
    </div>
  );
}
