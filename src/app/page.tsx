import { WelcomeBanner } from "@/components/Main-Sections/WelcomeBanner/WelcomeBanner";
import { ServicesSection } from "@/components/Main-Sections/ServicesSection/ServicesSection";
import { AdressSection } from "@/components/Main-Sections/AdressSection/AdressSection";
import { AboutUsSection } from "@/components/Main-Sections/AboutUsSection/AboutUsSection";

export default function Home() {
  return (
    <div>
      <main>
        <WelcomeBanner></WelcomeBanner>
        <ServicesSection></ServicesSection>
        <AdressSection></AdressSection>
        <AboutUsSection></AboutUsSection>
        
      </main>
    </div>
  );
}
