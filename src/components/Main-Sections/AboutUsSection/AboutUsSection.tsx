"use client";

import * as React from "react";
import Image from 'next/image';  // Importação do componente Image do Next.js
import "./AboutUsSection.css";

export function AboutUsSection() {
  // Renomeando para PascalCase
  return (
    <section id="AboutUsSection" className="section-about-us">
      <div className="card-avaliacao">
        <div className="star-rating">
          <div className="star active"></div>
          <div className="star active"></div>
          <div className="star active"></div>
          <div className="star active"></div>
          <div className="star active"></div>
        </div>
        <h4>Incrivel!</h4>
        <p>O atendimento no Salão Senac foi impecável! Agendei pelo site e tudo foi muito rápido. O serviço é de qualidade, com profissionais atenciosos. Super recomendo!</p>
     
        <div className="img-avaliacao">
          <Image 
            src="/img/moca-avaliacao.png" 
            alt="Foto de Rafaella Lima" 
            width={50} 
            height={50} 
          />
          <p><strong>Rafaella Lima</strong></p>
        </div>
      </div>
      
      <div className="container-about-us">
        <h3>Sobre nós</h3>
        <p>O Salão Empresa Pedagógica também dispõe de formações profissionais voltadas para quem deseja aprender ou se especializar na área de beleza. No Recife, o Senac dispõe de uma unidade especializada em serviços na área de beleza, estética e bem-estar para atender ao público em geral. O Salão Empresa Pedagógica conta com uma estrutura moderna e profissionais altamente qualificados, para proporcionar os cuidados que você precisa. São oferecidos serviços de manicure, pedicure, cortes masculinos e femininos, mechas e cuidados com todos os tipos de cabelo, design de sobrancelha, depilação, massagem, podologia, entre outros. As formações proporcionam ao aluno a oportunidade de conhecer as melhores técnicas e rotinas do mercado.</p>
      </div>
    </section>
  );
}
