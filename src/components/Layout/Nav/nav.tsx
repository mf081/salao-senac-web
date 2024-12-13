'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './nav.css';
import Link from 'next/link';

export function Nav() {
    const router = useRouter();

    const handleAgendarClick = () => {
        router.push('/pages/LoginCliente/Login');
    };

    return (
        <nav>
            <div className="nav-container">
                <div className="nav-img">
                    <Link href="/">
                        <img src="/img/logo-salao-senac-preta.png" alt="Logo" />
                    </Link>
                </div>
                <div className="nav-right">
                    <Link href="/">
                        <button className="nav-button">HOME</button>
                    </Link>
                    <button className="nav-button" onClick={handleAgendarClick}>
                        AGENDAR HORÁRIO
                    </button>
                    <a href="#AdressSection">
                        <button className="nav-button">CONTATO</button>
                    </a>
                    <a href="#AboutUsSection">
                        <button className="nav-button">SOBRE NÓS</button>
                    </a>
                </div>
            </div>
        </nav>
    );
}
