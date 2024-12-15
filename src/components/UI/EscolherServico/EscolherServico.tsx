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
  descricao?: string; // Adicionando descrição opcional
};

type ServicoComPreco = {
  nome: string;
  preco: number;
  descricao?: string; // Adicionando descrição opcional
};

type Servico = ServicoComPrecos | ServicoComPreco;

type Categoria = {
  nome: string;
  servicos: Servico[];
};

export function EscolherServico() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const goToCategory = useCallback((direction: number) => {
    setCurrentCategoryIndex((prevIndex) => {
      const nextIndex = (prevIndex + direction + servicesData.categorias.length) % servicesData.categorias.length;
      return nextIndex;
    });
  }, []);

  const currentCategory: Categoria = servicesData.categorias[currentCategoryIndex];

  // Componente de navegação de categorias
  const CategoryNavigation = () => (
    <div id="ServicesSection" className="escolher-text-card-categories-container">
      <img
        className="escolher-arrow-img"
        src="/img/icons/icon-seta-esquerda.png"
        width="100px"
        height="100px"
        onClick={() => goToCategory(-1)} // Navegar para a categoria anterior
        alt="Seta para a esquerda"
      />
      <h3 className="escolher-text-card-categories">{currentCategory.nome}</h3>
      <img
        className="escolher-arrow-img"
        src="/img/icons/icon-seta-direita.png"
        width="100px"
        height="100px"
        onClick={() => goToCategory(1)} // Navegar para a próxima categoria
        alt="Seta para a direita"
      />
    </div>
  );

  // Componente de exibição de preço
  const PriceDisplay = ({ servico }: { servico: Servico }) => {
    if ('precos' in servico) {
      // Para a primeira categoria, exibe os preços de forma concatenada
      const precos = Object.values(servico.precos).join('/');
      return <p className="escolher-price">R$ {precos}</p>;
    } else {
      // Para serviços com um único preço
      return <p className="escolher-price">R$ {servico.preco}</p>;
    }
  };

  return (
    <section className="escolher-section-02-container">
      <h2>Serviços</h2>
      <h1>Ofertados</h1>

      {/* Navegação entre as categorias */}
      <CategoryNavigation />

      {/* Exibindo os cards de serviços */}
      <div className="escolher-section-card-container">
        {currentCategory.servicos.map((servico, index) => (
          <div className="escolher-card" key={`${currentCategoryIndex}-${index}`}>
            <h3>{servico.nome}</h3>
            {servico.descricao && <p className="escolher-description">{servico.descricao}</p>} {/* Exibe a descrição */}
            <PriceDisplay servico={servico} />
          </div>
        ))}
      </div>
    </section>
  );
}
