import React from 'react'
import './nav.css'
import Link from 'next/link';

export function Nav () {
    return(
        <nav>
        <div className="nav-container">
            <div className="nav-img">
                <a href="/">
                    <img src="/img/logo-salao-senac-preta.png" alt="Logo"/>
                </a>
            </div>
            <div className="nav-right">
                <a href="/" ><button className="nav-button">HOME</button></a>
                <a href="#contato" ><button className="nav-button">AGENDAR HORÁRIO</button></a>
                <a href="#AdressSection" ><button className="nav-button">CONTATO</button></a>
                <a href="#AboutUsSection" ><button className="nav-button">SOBRE NÓS</button></a>
            </div>
        </div>
    </nav>  
    );
}