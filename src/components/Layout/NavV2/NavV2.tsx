'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './NavV2.css';
import Link from 'next/link';

export function NavV2() {
    const router = useRouter();

    const handleAgendarClick = () => {
        router.push('/pages/LoginCliente/Login');
    };

    const handleCadrastarClick = () => {
        router.push('/pages/LoginCliente/Cadastramento');
    };

    const handleCalendarioClick = () => {
        router.push('/pages/AgendamentoCliente/Agendamento');
    };

    const handleContatoClick = () => {
        router.push('/#AdressSection'); // Navegação com hash
    };

    const handleSobreNosClick = () => {
        router.push('/#AboutUsSection'); // Navegação com hash
    };

    const handleHomeClick = () => {
        router.push('/'); // Voltar para a página inicial
    };
    const handleResumoAgendadoClick = () => {
        router.push('/pages/AgendamentoCliente/ResumoAgendado'); // Voltar para a página inicial
    };

    return (
        <nav>
            <div className="v2-nav-container">
                <div className="v2-nav-img">
                    <img onClick={handleHomeClick} src="/img/logo-salao-senac-preta.png" alt="Logo" width="199px" height="158px" />
                </div>
                <div className="v2-nav-mid">
                    <button className="v2-nav-button-center" onClick={handleHomeClick}>
                        Home
                    </button>
                    <button className="v2-nav-button-center" onClick={handleResumoAgendadoClick}>
                        AGENDAR HORÁRIO
                    </button>
                    <button className="v2-nav-button-center" onClick={handleContatoClick}>
                        CONTATO
                    </button>
                    <button className="v2-nav-button-center" onClick={handleSobreNosClick}>
                        SOBRE NÓS
                    </button>
                </div>
                <div className="v2-nav-right">
                    <button onClick={handleCadrastarClick} className="v2-nav-button">
                        Cadastre-se
                    </button>
                    <button onClick={handleAgendarClick} className="v2-nav-button">
                        Entrar
                    </button>
                </div>
            </div>
        </nav>
    );
}
