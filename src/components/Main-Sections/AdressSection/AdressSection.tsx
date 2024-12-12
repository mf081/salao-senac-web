import * as React from "react";
import "./AdressSection.css";

export function AdressSection(){
    return(
        <section className="adress-section">
            <div className="container-adress">
                <h2>Endereço</h2>
            </div>
            <div className="section-02-location container-endereco">
                <img className="icone-adress" src="/img/icons/place-icon.png" alt="Localização" />
                <h3>
                Pernambuco - Av. Visconde de Suassuna, 500 - Santo Amaro - Recife
                </h3>
            </div>
            <div className="adress-principal">
                <div className="funcionamento-adress">
                    <h3 className="titulo-adress">Funcionamento</h3>
                    <p className="text-adress">Segunda à sexta-feira das 8h às 18h <br></br> Sábados das 9h às 15h <br></br> Atendimento com horário marcado.</p>
                    <div className="fale-conosco-adress">
                        <p className="text-adress">Ficou com alguma dúvida?</p>
                        <h3 className="titulo-adress">Fale conosco</h3>
                        <p className="paragrafo-adress">Não perca mais tempo e entre agora em contato com nossa equipe de especialistas. Teremos o maior prazer em ajudar você.</p>
                        <div className="container-button-adress">
                            <span className="contactt-adress">(81)3413.6688</span>
                            <span className="contactt-adress">(00) 00000-0000</span>
                            <span className="contactt-adress">contato@buenobeauty.com.br</span>
                        </div>
                    </div>
                </div>
                <div className="container-img-adress">
                    <img src="/img/frente-salao.png" alt="" />
                </div>
            </div>



        </section>

    
    
    );
}