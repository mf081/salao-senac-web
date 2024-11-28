'use client'; 

import * as React from 'react';
import "./contact.css";

export function ContactContainer() {  // Renomeando para PascalCase
    return (
        <section className="contact-container" id="contato">
            <div className="contact-text">
                <h2>Ficou com alguma dúvida?</h2>
                <h1>FALE CONOSCO</h1>
                <p>Não perca mais tempo e entre agora em contato com nossa equipe de especialistas. Teremos o maior prazer em ajudar você.</p>
                <button className="contact-number typography-button" onClick={() => window.location.href = 'tel:+550000000000'}>(00) 0000-0000</button>
                <button className="contact-whatsapp typography-button" onClick={() => window.location.href = 'https://wa.me/550000000000'}>(00) 00000-0000</button>
                <button className="contact-email typography-button" onClick={() => window.location.href = 'mailto:contato@buenobeauty.com.br'}>contato@buenobeauty.com.br</button>
            </div>
            <div className="contact-form">
                <h2>Formulário de Contato</h2>
                <form>
                    <input type="text" id="nome" className="form-control" placeholder="Nome Completo" required />
                    <div className="input-group">
                        <input type="text" id="telefone" className="form-control" placeholder="Celular/Whatsapp" required />
                        <input type="email" id="email" className="form-control" placeholder="Email" required />
                    </div>
                    <input type="text" id="mensagem" className="form-control mensagem" placeholder="Mensagem" required />
                    <button type="submit">Enviar Mensagem »</button>
                </form>
            </div>
        </section> 
    );
}
