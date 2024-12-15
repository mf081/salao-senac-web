'use client';
import React, { useState, useEffect, useCallback } from "react";
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
  descricao?: string; // descrição opcional
};

type ServicoComPreco = {
  nome: string;
  preco: number;
  descricao?: string; // descrição opcional
};

type Servico = ServicoComPrecos | ServicoComPreco;

type Categoria = {
  nome: string;
  servicos: Servico[];
};

export function ServicesSection() {
  const [servicesData, setServicesData] = useState<{ categorias: Categoria[] }>({ categorias: [] });
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Estado para controle de carregamento

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/services/product-service'); // Chama a API local
        const data = await response.json();
        setServicesData(data);
      } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  const [formattedDate, setFormattedDate] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Garantir que a data seja formatada apenas no cliente, após a renderização
      const date = new Date();
      setFormattedDate(date.toLocaleString());  // Formata a data de acordo com a localidade do cliente
    }
  }, []);

  const goToCategory = useCallback((direction: number) => {
    setCurrentCategoryIndex((prevIndex) => {
      const nextIndex = (prevIndex + direction + servicesData.categorias.length) % servicesData.categorias.length;
      return nextIndex;
    });
  }, [servicesData.categorias.length]);

  // Garantir que currentCategory não seja indefinido
  const currentCategory: Categoria = servicesData.categorias[currentCategoryIndex] || { nome: "", servicos: [] };

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

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <section className="section-02-container">
      <h2>Serviços</h2>
      <h1>Ofertados</h1>

      {/* Navegação entre as categorias */}
      <CategoryNavigation />

      {/* Exibindo os cards de serviços */}
      <div className="section-card-container">
        {currentCategory.servicos.length > 0 ? (
          currentCategory.servicos.map((servico, index) => (
            <div className="card" key={`${currentCategoryIndex}-${index}`}>
              <h3>{servico.nome}</h3>
              {servico.descricao && <p className="description">{servico.descricao}</p>} {/* Exibe a descrição */}
              <PriceDisplay servico={servico} />
            </div>
          ))
        ) : (
          <p>Não há serviços disponíveis para esta categoria.</p>
        )}
      </div>
    </section>
  );
}
