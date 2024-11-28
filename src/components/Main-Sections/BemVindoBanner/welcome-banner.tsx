import * as React from 'react';
import "./welcome-banner.css";

export function WelcomeBanner() {  // Renomeando para PascalCase
    return (
            <section className="section-01-container">
                <div className="section-01-img">
                    <img src="/img/muiecomquadrado.png" id="muie-capa" width="290px" alt="Imagem de capa" />
                </div>
                <div className="section-01-text">
                    <h1>Bem-vindo ao salão Empresa Pedagógica</h1>
                    <p>Ficou fácil dar aquele toque especial no seu visual! Reserve seu horário e conte com o cuidado personalizado que você merece. Seu momento de brilhar chegou.</p>
                    <button>
                        Agendar Horário
                        <img src="/img/icons/Clock-icon.png" alt="Ícone de relógio" className="section-01-button-icon" /> {/* Apliquei uma nova classe para o ícone */}
                    </button>
                </div>
            </section>
    );
}
