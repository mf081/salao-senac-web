'use client';
import React, { useState, useEffect, useCallback } from "react";
import { fetchCategorias } from '@/services/api';
import "./ServicesSection.css";

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

export function ServicesSection() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  // Função para buscar categorias
  useEffect(() => {
    const loadCategorias = async () => {
      const categoriasData = await fetchCategorias();
      setCategorias(categoriasData.categorias || []); // Define as categorias obtidas
    };
    
    loadCategorias();
  }, []);

  const goToCategory = useCallback((direction: number) => {
    setCurrentCategoryIndex((prevIndex) => {
      const nextIndex = (prevIndex + direction + categorias.length) % categorias.length;
      return nextIndex;
    });
  }, [categorias.length]);

  if (!categorias.length) return <p>Carregando serviços...</p>; // Exibe um loading se ainda não houver categorias

  const currentCategory: Categoria = categorias[currentCategoryIndex];

  // Componente de navegação de categorias
  const CategoryNavigation = () => (
    <div id="ServicesSection" className="text-card-categories-container">
      <img
        className="arrow-img"
        src="/img/icons/icon-seta-esquerda.png"
        width="100px"
        height="100px"
        onClick={() => goToCategory(-1)} // Navegar para a categoria anterior
        alt="Seta para a esquerda"
      />
      <h3 className="text-card-categories">{currentCategory.nome}</h3>
      <img
        className="arrow-img"
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
      return <p className="price">R$ {precos}</p>;
    } else {
      // Para serviços com um único preço
      return <p className="price">R$ {servico.preco}</p>;
    }
  };

  return (
    <section className="section-02-container">
      <h2>Serviços</h2>
      <h1>Ofertados</h1>

      {/* Navegação entre as categorias */}
      <CategoryNavigation />

      {/* Exibindo os cards de serviços */}
      <div className="section-card-container">
        {currentCategory.servicos.map((servico, index) => (
          <div className="card" key={`${currentCategoryIndex}-${index}`}>
            <h3>{servico.nome}</h3>
            {servico.descricao && <p className="description">{servico.descricao}</p>} {/* Exibe a descrição */}
            <PriceDisplay servico={servico} />
          </div>
        ))}
      </div>
    </section>
  );
}
