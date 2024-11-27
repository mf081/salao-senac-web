import * as React from 'react';
import "./professionals.css";

export function ProfessionalsSection() {  // Renomeando para PascalCase
    return (
        <section className="professionals-section">
            <div className="professionals-left">
                <h2>NOSSOS</h2>
                <h1>PROFISSIONAIS</h1>
                <p>Conheça todos nossos experts que estão à sua disposição para cuidar do seu cabelo.</p>
            </div>
            <div className="professionals-right">
                {/* Profissional 1 */}
                <div className="professional-card">
                    <img src="/img/professionals-1.png" alt="Maria Silva" />
                    <h3>Maria Silva</h3>
                    <p>Designer de Cabelos</p>
                    <hr />
                    <div className="social-icons">
                        <a href="#">
                            <img src="/img/icons/gray-instagram-icon.png" className="professionals-icons" alt="Instagram" />
                        </a>
                        <a href="#">
                            <img src="/img/icons/gray-tiktok-icon.png" className="professionals-icons" alt="TikTok" />
                        </a>
                    </div>
                </div>

                {/* Profissional 2 */}
                <div className="professional-card">
                    <img src="/img/professionals-2.png" alt="Ana Oliveira" />
                    <h3>Ana Oliveira</h3>
                    <p>Estilista de Cabelos</p>
                    <hr />
                    <div className="social-icons">
                        <a href="#">
                            <img src="/img/icons/gray-instagram-icon.png" className="professionals-icons" alt="Instagram" />
                        </a>
                        <a href="#">
                            <img src="/img/icons/gray-tiktok-icon.png" className="professionals-icons" alt="TikTok" />
                        </a>
                    </div>
                </div>

                {/* Profissional 3 */}
                <div className="professional-card">
                    <img src="/img/professionals-3.png" alt="Juliana Costa" />
                    <h3>Juliana Costa</h3>
                    <p>Colorista</p>
                    <hr />
                    <div className="social-icons">
                        <a href="#">
                            <img src="/img/icons/gray-instagram-icon.png" className="professionals-icons" alt="Instagram" />
                        </a>
                        <a href="#">
                            <img src="/img/icons/gray-tiktok-icon.png" className="professionals-icons" alt="TikTok" />
                        </a>
                    </div>
                </div>

                {/* Profissional 4 */}
                <div className="professional-card">
                    <img src="/img/professionals-4.png" alt="Fernanda Almeida" />
                    <h3>Fernanda Almeida</h3>
                    <p>Barbeira</p>
                    <hr />
                    <div className="social-icons">
                        <a href="#">
                            <img src="/img/icons/gray-instagram-icon.png" className="professionals-icons" alt="Instagram" />
                        </a>
                        <a href="#">
                            <img src="/img/icons/gray-tiktok-icon.png" className="professionals-icons" alt="TikTok" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
