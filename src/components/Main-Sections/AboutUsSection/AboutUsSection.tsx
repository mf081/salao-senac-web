"use client";

import * as React from "react";
import "./AboutUsSection.css";

export function AboutUsSection() {
  return (
    <section className="section-about-us">
      <div className="card-avaliacao">
        <h4>Incrivel!</h4>
        <p>O atendimento no Salão Senac foi impecável! Agendei pelo site e tudo foi muito rápido. O serviço é de qualidade, com profissionais atenciosos. Super recomendo!</p>
        <div className="img-avaliacao">
          <img src="/img/moca-avaliacao.png" alt="" /><strong>Rafaella Lima</strong>
        </div>
      </div>
      <div className="container-about-us">
        <h3>Sobre nós</h3>
        <p>O Salão Empresa Pedagógica também dispõe de formações profissionais voltadas para quem deseja aNo Recife, o Senac dispõe de uma unidade especializada em serviços na área de beleza, estética e bem-estar para atender ao púbico em geral. O Salão Empresa Pedagógica conta com uma estrutura moderna e profissionais altamente qualificados, para proporcionar os cuidados que você precisa. São oferecidos serviços de manicure, pedicure, cortes masculinos e femininos, mechas e cuidados com todos os tipos de cabelo, design de sobrancelha, depilação, massagem, podologia, entre outros. prender ou se especializar na área de Beleza. As formações proporcionam ao aluno a oportunidade de conhecer as melhores técnicas e rotinas do mercado.
        </p>

      </div>
    </section>
  );
}
