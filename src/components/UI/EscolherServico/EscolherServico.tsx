'use client';
import React, { useState, useCallback } from "react";
import "./EscolherServico.css";
import servicesData from '/workspaces/salao-senac-web/src/json/product-services.json';

type Precos = {
  curto: number;
  medio: number;
  longo: number;
  extralongo: number;
};

type ServicoComPrecos = {
  nome: string;
  precos: Precos;
  descricao?: string;
};

type ServicoComPreco = {
  nome: string;
  preco: number;
  descricao?: string;
};

type Servico = ServicoComPrecos | ServicoComPreco;

type Categoria = {
  nome: string;
  servicos: Servico[];
};

export function EscolherServico() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>({}); // Estado de seleção

  const goToCategory = useCallback((direction: number) => {
    setCurrentCategoryIndex((prevIndex) => {
      const nextIndex = (prevIndex + direction + servicesData.categorias.length) % servicesData.categorias.length;
      return nextIndex;
    });
  }, []);

  const toggleServiceSelection = (serviceName: string) => {
    setSelectedServices((prevSelected) => ({
      ...prevSelected,
      [serviceName]: !prevSelected[serviceName],
    }));
  };

  const currentCategory: Categoria = servicesData.categorias[currentCategoryIndex];

  const CategoryNavigation = () => (
    <div id="ServicesSection" className="escolher-text-card-categories-container">
      <img
        className="escolher-arrow-img"
        src="/img/icons/icon-seta-esquerda.png"
        width="100px"
        height="100px"
        onClick={() => goToCategory(-1)}
        alt="Seta para a esquerda"
      />
      <h3 className="escolher-text-card-categories">{currentCategory.nome}</h3>
      <img
        className="escolher-arrow-img"
        src="/img/icons/icon-seta-direita.png"
        width="100px"
        height="100px"
        onClick={() => goToCategory(1)}
        alt="Seta para a direita"
      />
    </div>
  );

  const PriceDisplay = ({ servico }: { servico: Servico }) => {
    if ('precos' in servico) {
      const precos = Object.values(servico.precos).join('/');
      return <p className="escolher-price">R$ {precos}</p>;
    } else {
      return <p className="escolher-price">R$ {servico.preco}</p>;
    }
  };

  return (
    <section className="escolher-section-02-container">
      <h2>Serviços</h2>
      <h1>Ofertados</h1>
      <CategoryNavigation />
      <div className="escolher-section-card-container">
        {currentCategory.servicos.map((servico, index) => {
          const isSelected = selectedServices[servico.nome];
          return (
            <div
              className={`escolher-card ${isSelected ? "escolher-card-selected" : ""}`}
              key={`${currentCategoryIndex}-${index}`}
              onClick={() => toggleServiceSelection(servico.nome)}
            >
              <h3>{servico.nome}</h3>
              {servico.descricao && <p className="escolher-description">{servico.descricao}</p>}
              <PriceDisplay servico={servico} />
              <input
                type="checkbox"
                className="escolher-checkbox"
                checked={isSelected || false}
                onChange={() => toggleServiceSelection(servico.nome)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
