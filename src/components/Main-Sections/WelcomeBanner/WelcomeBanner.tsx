'use client';
import * as React from "react";
import "./WelcomeBanner.css";
import { useRouter } from 'next/navigation';

export function WelcomeBanner() {

  const router = useRouter();
  const handleAgendarClick = () => {
    router.push('/pages/LoginCliente/Login');
  };

  // Renomeando para PascalCase
  return (
    <section id="WelcomeBanner" className="section-01-container">
      <div className="section-01-img">
        <img
          src="/img/muiecomquadrado.png"
          id="muie-capa"
          width="290px"
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
        <button onClick={handleAgendarClick}className="button-welcome-banner">
          Agendar Horário
          <img
            src="/img/icons/Clock-icon.png"
            alt="Ícone de relógio"
            className="section-01-button-icon"
          />{" "}
          {/* Apliquei uma nova classe para o ícone */}
        </button>
      </div>
    </section>
  );
}
