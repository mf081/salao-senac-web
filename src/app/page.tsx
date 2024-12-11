import Image from "next/image";
import styles from "./page.module.css";
import { WelcomeBanner } from "@/components/Main-Sections/BemVindoBanner/WelcomeBanner";
import { ServicesSection } from "@/components/Main-Sections/Catalogo/Catalog";
import { ProfessionalsSection } from "@/components/Main-Sections/Profissionais/Professionals";
import { TestimonialsContainer } from "@/components/Main-Sections/Depoimentos/Testimonials";
import { ContactContainer } from "@/components/Main-Sections/Contato/Contact";
import { AdressSection } from "@/components/Main-Sections/Adress/Adress";

export default function Home() {
  return (
    <div>
      <main>
        <WelcomeBanner></WelcomeBanner>
        <ServicesSection></ServicesSection>
        {/* <ProfessionalsSection></ProfessionalsSection> */}
        <AdressSection></AdressSection>
        <ContactContainer></ContactContainer>
        
      </main>
    </div>
  );
}
