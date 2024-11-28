import Image from "next/image";
import styles from "./page.module.css";
import { WelcomeBanner } from "@/components/Main-Sections/BemVindoBanner/welcome-banner";
import { ServicesSection } from "@/components/Main-Sections/Catalogo/catalog";
import { ProfessionalsSection } from "@/components/Main-Sections/Profissionais/professionals";
import { TestimonialsContainer } from "@/components/Main-Sections/Depoimentos/testimonials";
import { ContactContainer } from "@/components/Main-Sections/Contato/contact";

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
