import React from 'react';
import './nav.css';
import Link from 'next/link';

export function Nav() {
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
                    <Link href="pages/LoginCliente/Login">
                        <button className="nav-button">AGENDAR HORÁRIO</button>
                    </Link>
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
