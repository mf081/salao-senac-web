import React from 'react'
import "./footer.css";
import "./footer-bar.css";
export function Footer () {
    return(
        <footer>
        <div className="footer-container">
            <div className="footer-logo">
                <img src="/img/salaologopnggg.png" alt="Logo SENAC"/>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="footer-services-contacts">
                <div className="footer-services">
                    <h3>Serviços</h3>
                    <ul>
                        <li>Lavada Especial</li>
                        <li>Corte Feminino</li>
                        <li>Escova</li>
                        <li>Luzes</li>
                        <li>Mais Serviços</li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contato</h3>
                    <ul>
                        <li>Fale Conosco</li>
                        <li>Agendar Horário</li>
                        <li>
                            <i className="fas fa-phone"></i> (00) 4002-8922
                        </li>
                        <li>
                            <i className="fa-brands fa-whatsapp"></i> (00) 00000-0000
                        </li>
                    </ul>
                </div>        
            </div>
        </div>
        <div className="footer-bar">
            <div className="footer-bar-left">
                <p>Salão SENAC © Todos Direitos Reservados</p>
            </div>
            <div className="footer-bar-center">
                <p>
                    Conheça nossos 
                    <a href="#">Termos de Uso</a> © 
                    <a href="#">Política de Privacidade</a>.
                </p>
            </div>
            <div className="footer-bar-right">
                <p>Desenvolvido por TechStorm</p>
            </div>
        </div>        
    </footer>
    );
}