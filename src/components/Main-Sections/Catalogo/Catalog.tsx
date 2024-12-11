'use client';  

import React, { useState } from "react";
import "./Catalog.css";

import servicesData from '/workspaces/salao-senac-web/src/json/product-services.json'; 

// Definindo os tipos para os serviços
type Precos = {
  curto: number;
  medio: number;
  longo: number;
  extralongo: number;
};

type ServicoComPrecos = {
  nome: string;
  precos: Precos;
};

type ServicoComPreco = {
  nome: string;
  preco: number;
};

type Servico = ServicoComPrecos | ServicoComPreco;

export function ServicesSection() {
  // Estado para controlar a categoria atual
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  // Função para alternar as categorias
  const goToNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) =>
      prevIndex === servicesData.categorias.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousCategory = () => {
    setCurrentCategoryIndex((prevIndex) =>
      prevIndex === 0 ? servicesData.categorias.length - 1 : prevIndex - 1
    );
  };

  // Pegando a categoria atual
  const currentCategory = servicesData.categorias[currentCategoryIndex];

  return (
    <section className="section-02-container">
      <h2>Serviços</h2>
      <h1>Ofertados</h1>

      {/* Navegação entre as categorias */}
      <div className="text-card-categories-container">
        <img
          className="arrow-img"
          src="/img/icons/icon-seta-esquerda.png"
          width="100px"
          height="100px"
          onClick={goToPreviousCategory} // Navegar para a categoria anterior
        />
        <h3 className="text-card-categories">{currentCategory.nome}</h3>
        <img
          className="arrow-img"
          src="/img/icons/icon-seta-direita.png"
          width="100px"
          height="100px"
          onClick={goToNextCategory} // Navegar para a próxima categoria
        />
      </div>

      {/* Exibindo os cards de serviços */}
      <div className="section-card-container">
        {currentCategory.servicos.map((servico, index) => (
          <div className="card" key={index}>
            <h3>{servico.nome}</h3>

            {/* Verificando se o serviço possui diferentes preços para diferentes tamanhos */}
            {"precos" in servico ? (
              Object.entries(servico.precos).map(([tamanho, preco], idx) => (
                <p key={idx} className="price">
                  {`${tamanho.charAt(0).toUpperCase() + tamanho.slice(1)}: R$ ${preco}`}
                </p>
              ))
            ) : (
              <p className="price">R$ {servico.preco}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
