import React from 'react';
import './ResumoAgendado.css';
import SideNavBar from '@/components/UI/SideNavBar/SideNavBar';

export default function ResumoAgendado (){
    return(
        <main>
            <SideNavBar></SideNavBar>
            
            <div className="container">
                <h1 className="titulo">Resumo</h1>
                <div className="resumo-container">
                    <div className="resumo-conteudo">
                        <h2>Resumo da compra</h2>
                         <div className="info">
                            <p><strong>Serviço:</strong> Progressiva + Escova R$ 246,00</p>
                            <p><strong>Data:</strong> 18/11/2024</p>
                            <p><strong>Horário:</strong> 10:30 - 11:15 <br></br> 11:15 - 12:00</p>
                            <p><strong>Forma de Pag.:</strong> Pix</p>
                            <hr></hr>
                            <p className="total"><strong>Total</strong> R$ 90,00</p>
                        </div>
                        <button className="botao">AGENDAR</button>
                    </div>
                </div>
            </div>

        </main>
    );
}
