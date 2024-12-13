import React from 'react'
import "./footer.css";
import "./footer-bar.css";
export function Footer () {
    return(
        <footer>
        <div className="footer-container">
            <div className="footer-logo">
                <img src="/img/logo-salao-senac-branca.png" alt="Logo SENAC"/>
                <p className='text-image-p'>“Beleza e aprendizado em harmonia: transforme seu futuro no Salão Empresa Pedagógica do Senac Recife”.</p>
            </div>
            <div className="footer-services-contacts">
                <div className="footer-services">
                    <h3 className='footer-title'>Navegação</h3>
                    <ul>
                        <li className='services-footer-li'>Home</li>
                        <li className='services-footer-li'>Sobre Nos</li>
                        <li className='services-footer-li'>Contato</li>
                        <li className='services-footer-li'>Agendar Hórario</li>
                        <li className='services-footer-li'></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3 className='footer-title'>Serviços</h3>
                    <ul>
                        <li className='services-footer-li'>Corte Feminino</li>
                        <li className='services-footer-li'>Escova</li>
                        <li className='services-footer-li'>Luzes </li>
                        <li className='services-footer-li'><a>Mais serviços</a></li>
                    </ul>
                </div>        
            </div>
        </div>
        <div className="footer-bar">
            <div className='text-footer-bar'>
                <p> © 2024 Salão SENAC - Todos Direitos Reservados </p>
            </div>
          
        </div>
    </footer>
    );
}