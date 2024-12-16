'use client';
import React, { useState, useCallback } from "react";
import "./EscolherServico.css";
import servicesData from '/workspaces/salao-senac-web/public/json/product-services.json';

// Definir os tipos para Preco e Servico
interface Preco {
    curto: number;
    medio: number;
    longo: number;
    extralongo: number;
}

interface Servico {
    nome: string;
    descricao: string;
    preco?: number;
    precos?: Preco;
}

interface EscolherServicoProps {
    onServiceSelect: (servico: Servico) => void;
    selectedServices: Servico[];
}

export function EscolherServico({ onServiceSelect, selectedServices }: EscolherServicoProps) {
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    const goToCategory = useCallback((direction: number) => {
        setCurrentCategoryIndex((prevIndex) => {
            const nextIndex = (prevIndex + direction + servicesData.categorias.length) % servicesData.categorias.length;
            return nextIndex;
        });
    }, []);

    const currentCategory = servicesData.categorias[currentCategoryIndex];

    // Exibir preços de maneira condicional
    const PriceDisplay = ({ servico }: { servico: Servico }) => {
        if ('precos' in servico && servico.precos) {
            // Garantir que precos não é undefined
            const precos = Object.values(servico.precos).join('/');
            return <p className="escolher-price">R$ {precos}</p>;
        } else if (servico.preco) {
            return <p className="escolher-price">R$ {servico.preco}</p>;
        } else {
            return <p className="escolher-price">Preço indisponível</p>;
        }
    };

    return (
        <section className="escolher-section-02-container">
            <h2>Serviços</h2>
            <h1>Ofertados</h1>
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
            <div className="escolher-section-card-container">
                {currentCategory.servicos.map((servico, index) => {
                    const isSelected = selectedServices.some((s) => s.nome === servico.nome);
                    return (
                        <div
                            className={`escolher-card ${isSelected ? "escolher-card-selected" : ""}`}
                            key={`${currentCategoryIndex}-${index}`}
                        >
                            <h3>{servico.nome}</h3>
                            {servico.descricao && <p className="escolher-description">{servico.descricao}</p>}
                            <PriceDisplay servico={servico} />
                            <input
                                type="checkbox"
                                className="escolher-checkbox"
                                checked={isSelected || false}
                                onChange={() => onServiceSelect(servico)}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
