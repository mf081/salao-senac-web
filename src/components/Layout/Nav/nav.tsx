'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './nav.css';
import Link from 'next/link';
import { BotaoAgendarHorario } from '@/components/Button/button';

export function Nav() {
    const router = useRouter();

    const handleAgendarClick = () => {
        router.push('/pages/LoginCliente/Login');
    };
    
    const handleCalendarioClick = () => {
        router.push('/pages/AgendamentoCliente/Agendamento');
    };

    return (
        <nav>
            <div className="nav-container">
                <div className="nav-img">
                    <Link href="/pages/AgendamentoCliente/Agendamento">
                        <img src="/img/logo-salao-senac-preta.png" alt="Logo" width="199px" height="158px" />
                    </Link>
                </div>
                <div className="nav-right">
                    {/* Renderizando o componente BotaoAgendarHorario */}

                    {/* Botão para navegação do Calendário */}
                    <button className="nav-button" onClick={handleCalendarioClick}>
                        CALENDÁRIO
                    </button>

                    {/* Botão para navegar para Agendar Horário */}
                    <button className="nav-button" onClick={handleAgendarClick}>
                        AGENDAR HORÁRIO
                    </button>

                    {/* Link para seção de contato */}
                    <a href="#AdressSection">
                        <button className="nav-button">CONTATO</button>
                    </a>

                    {/* Link para seção Sobre Nós */}
                    <a href="#AboutUsSection">
                        <button className="nav-button">SOBRE NÓS</button>
                    </a>
                </div>
            </div>
        </nav>
    );
}
