'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Importando o componente Image
import './NavV2.css';

export function NavV2() {
    const router = useRouter();

    const handleAgendarClick = () => {
        router.push('/pages/LoginCliente/Login');
    };

    const handleCadrastarClick = () => {
        router.push('/pages/LoginCliente/Cadastramento');
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

    return (
        <nav>
            <div className="v2-nav-container">
                <div className="v2-nav-img">
                    <Image 
                        onClick={handleHomeClick} 
                        src="/img/logo-salao-senac-preta.png" 
                        alt="Logo" 
                        width={199} 
                        height={158} 
                    />
                </div>
                <div className="v2-nav-mid">
                    <button className="v2-nav-button-center" onClick={handleHomeClick}>
                        Home
                    </button>
                    <button className="v2-nav-button-center" onClick={handleAgendarClick}>
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
