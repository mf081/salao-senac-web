'use client';
import * as React from "react";
import "./WelcomeBanner.css";
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Importando o componente Image do Next.js

export function WelcomeBanner() {

  const router = useRouter();
  const handleAgendarClick = () => {
    router.push('/pages/LoginCliente/Login');
  };

  // Renomeando para PascalCase
  return (
    <section id="WelcomeBanner" className="section-01-container">
      <div className="section-01-img">
        <Image
          src="/img/muiecomquadrado.png"
          id="muie-capa"
          width={290} // Ajustado para não usar 'px'
          height={290} // Ajustado para manter o aspecto correto
          alt="Imagem de capa"
        />
      </div>
      <div className="section-01-text">
        <h1>Bem-vindo ao salão Empresa Pedagógica</h1>
        <p>
          Ficou fácil dar aquele toque especial no seu visual! Reserve seu
          horário e conte com o cuidado personalizado que você merece. Seu
          momento de brilhar chegou.
        </p>
        <button onClick={handleAgendarClick} className="button-welcome-banner">
          Agendar Horário
          <Image
            src="/img/icons/Clock-icon.png"
            alt="Ícone de relógio"
            className="section-01-button-icon"
            width={24} // Ajuste do tamanho do ícone
            height={24} // Ajuste do tamanho do ícone
          />
        </button>
      </div>
    </section>
  );
}
