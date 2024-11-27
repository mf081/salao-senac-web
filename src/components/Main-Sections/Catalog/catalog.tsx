import * as React from 'react';
import "./catalog.css";

export function ServicesSection() {  // Renomeando para PascalCase
    return (
        <section className="section-02-container">
        <h2>Serviços</h2>
        <h1>Ofertados</h1>
        <div className="section-card-container">
            <div className="card">
                <h3>Lavada Especial</h3>
                <p className="description">Amet minim mollit non deserunt ullamco est minim mollit.</p>
                <p className="price">R$ 150.00</p>
                <button id="agendar2">Agendar Horário »</button>
            </div>
            <div className="card">
                <h3>Progressiva</h3>
                <p className="description">Amet minim mollit non deserunt ullamco est minim mollit.</p>
                <p className="price">R$ 123.00</p>
                <button id="agendar3">Agendar Horário »</button>
            </div>
            <div className="card">
                <h3>Escova</h3>
                <p className="description">Amet minim mollit non deserunt ullamco est minim mollit.</p>
                <p className="price">R$ 123.00</p>
                <button id="agendar4">Agendar Horário »</button>
            </div>
            <div className="card">
                <h3>Luzes</h3>
                <p className="description">Amet minim mollit non deserunt ullamco est minim mollit.</p>
                <p className="price">R$ 150.00</p>
                <button id="agendar5">Agendar Horário »</button>
            </div>
            <div className="card">
                <h3>Depilação</h3>
                <p className="description">Lorem ipsum fina iadsdna.</p>
                <p className="price">R$ 150.00</p>
                <button id="agendar6">Agendar Horário »</button>
            </div>
            <div className="card">
                <h3>Coloração</h3>
                <p className="description">Amet minim mollit non deserunt ullamco est minim mollit.</p>
                <p className="price">R$ 123.00</p>
                <button id="agendar7">Agendar Horário »</button>
            </div>
            <div className="card">
                <h3>Sobrancelha</h3>
                <p className="description">Amet minim mollit non deserunt ullamco est minim mollit.</p>
                <p className="price">R$ 123.00</p>
                <button id="agendar8">Agendar Horário »</button>
            </div>
            <div className="card">
                <h3>Selagem</h3>
                <p className="description">Amet minim mollit non deserunt ullamco est minim mollit.</p>
                <p className="price">R$ 123.00</p>
                <button id="agendar9">Agendar Horário »</button>
            </div>
        </div>
        <div className="section-02-location">
            <img src="/img/icons/place-icon.png" alt="Localização"/>
            <h1>Pernambuco - Av. Visconde de Suassuna, 500 - Santo Amaro - Recife</h1>
        </div>
    </section>
    );
}
