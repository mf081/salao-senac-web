import Image from "next/image";
import styles from "./page.module.css";
import { WelcomeBanner } from "@/components/Main-Sections/WelcomeBanner/welcome-banner";
import { ServicesSection } from "@/components/Main-Sections/Catalog/catalog";
import { ProfessionalsSection } from "@/components/Main-Sections/Professionals/professionals";
import { TestimonialsContainer } from "@/components/Main-Sections/Testimonials/testimonials";
import { ContactContainer } from "@/components/Main-Sections/Contact/contact";

export default function Home() {
  return (
    <div>
      <main>
        {/* Conteúdo vazio */}
        <WelcomeBanner></WelcomeBanner>
        <ServicesSection></ServicesSection>
        <ProfessionalsSection></ProfessionalsSection>
        <TestimonialsContainer></TestimonialsContainer>
        <ContactContainer></ContactContainer>
        
      </main>
    </div>
  );
}
