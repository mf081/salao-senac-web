import Image from "next/image";
import styles from "./page.module.css";
import { WelcomeBanner } from "@/components/Main-Sections/BemVindoBanner/WelcomeBanner";
import { ServicesSection } from "@/components/Main-Sections/Catalogo/Catalog";
import { ProfessionalsSection } from "@/components/Main-Sections/Profissionais/Professionals";
import { TestimonialsContainer } from "@/components/Main-Sections/Depoimentos/Testimonials";
import { ContactContainer } from "@/components/Main-Sections/Contato/Contact";

export default function Home() {
  return (
    <div>
      <main>
        {/* Conteúdo vazio */}
        <WelcomeBanner></WelcomeBanner>
        <ServicesSection></ServicesSection>
        {/* <ProfessionalsSection></ProfessionalsSection> */}
        <TestimonialsContainer></TestimonialsContainer>
        <ContactContainer></ContactContainer>
        
      </main>
    </div>
  );
}
