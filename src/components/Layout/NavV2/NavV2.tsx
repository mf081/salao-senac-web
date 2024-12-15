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
    
    const handleCalendarioClick = () => {
        router.push('/pages/AgendamentoCliente/Agendamento');
    };

    return (
        <nav>
            <div className="v2-nav-container">
                <div className="v2-nav-img">
                    <Link href="/pages/AgendamentoCliente/Agendamento">
                        <img src="/img/logo-salao-senac-preta.png" alt="Logo" width="199px" height="158px" />
                    </Link>
                </div>
                <div className="v2-nav-mid">
                    <button className="v2-nav-button-center" onClick={handleCalendarioClick}>
                        Home
                    </button>
                    <button className="v2-nav-button-center" onClick={handleAgendarClick}>
                        AGENDAR HORÁRIO
                    </button>
                    <a href="#AdressSection">
                        <button className="v2-nav-button-center">CONTATO</button>
                    </a>
                    <a href="#AboutUsSection">
                        <button className="v2-nav-button-center">SOBRE NÓS</button>
                    </a>
                </div>
                <div className="v2-nav-right">
                    <a href="#AboutUsSection">
                        <button className="v2-nav-button">Cadraste-se</button>
                    </a>
                    <a href="#AboutUsSection">
                        <button className="v2-nav-button">Entrar</button>
                    </a>
                </div>
            </div>
        </nav>
    );
}
