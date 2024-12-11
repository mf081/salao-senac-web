import React from 'react'
import './nav.css'

export function Nav () {
    return(
        <nav>
        <div className="nav-container">
            <div className="nav-img">
                <a href="/index.html">
                    <img src="/img/logo-salao-senac-preta.png" alt="Logo"/>
                </a>
            </div>
            <div className="nav-right">
                <a href="#home" ><button className="nav-button">HOME</button></a>
                <a href="#contato" ><button className="nav-button">AGENDAR HORÁRIO</button></a>
                <a href="#contato" ><button className="nav-button">CONTATO</button></a>
                <a href="#sobre-nos" ><button className="nav-button">SOBRE NÓS</button></a>
            </div>
        </div>
    </nav>  
    );
}