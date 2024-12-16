'use client';
import React, { useState } from 'react';
import './ResumoAgendado.css';
import SideNavBar from '@/components/Layout/SideNavBar/SideNavBar';
import { AgendamentoHeader } from '@/components/Layout/AgendamentoHeader/AgendamentoHeader';
import { CarrinhoServicos } from '@/components/UI/CarrinhoServicos/CarrinhoServicos';
import { EscolherServico } from '@/components/UI/EscolherServico/EscolherServico';

// Define o tipo para os serviços, incluindo a propriedade 'descricao'
interface Service {
    nome: string;
    descricao: string;  // Propriedade 'descricao' adicionada
    detalhes?: Record<string, unknown>; // Outras propriedades opcionais
}

export default function ResumoAgendado() {
    // Estado compartilhado para armazenar os serviços selecionados
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);

    // Função para adicionar ou remover serviços no carrinho
    const handleServiceSelection = (service: Service) => {
        setSelectedServices((prev) => {
            const exists = prev.find((s) => s.nome === service.nome);
            if (exists) {
                return prev.filter((s) => s.nome !== service.nome); // Remove se já existir
            } else {
                return [...prev, service]; // Adiciona se não existir
            }
        });
    };

    return (
        <main>
            <SideNavBar></SideNavBar>
            <div className='resumo-agendado-container'>
                <AgendamentoHeader title="Agendamento" pAgendamento='1/3 - Selecione os serviços desejados por você, role para baixo e aperte em confirmar.' />

                <div className="container-para-row-resumo-agendado">
                    {/* Passa a função e o estado para os componentes */}
                    <EscolherServico onServiceSelect={handleServiceSelection} selectedServices={selectedServices} />
                    <CarrinhoServicos selectedServices={selectedServices} />
                </div>
            </div>
        </main>
    );
}
