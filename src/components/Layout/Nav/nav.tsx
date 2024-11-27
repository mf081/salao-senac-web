import React from 'react'
import './nav.css'

export function Nav () {
    return(
        <nav>
        <div className="nav-container">
            <div className="nav-img">
                <a href="/index.html">
                    <img src="/img/salaologopnggg.png" alt="Logo"/>
                </a>
            </div>
            <div className="nav-right">
                <a href="#home" className="nav-text">HOME</a>
                <a href="#sobre-nos" className="nav-text">SOBRE NÓS</a>
                <a href="#contato" className="nav-text">CONTATO</a>
            </div>
        </div>
    </nav>  
    );
}