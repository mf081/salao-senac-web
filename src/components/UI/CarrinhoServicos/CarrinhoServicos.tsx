import React from "react";
import './CarrinhoServicos.css'

export function CarrinhoServicos () {
    return(
        <div className="resumo-conteudo">
        <h2>Resumo da compra</h2>
         <div className="info">
            <p><strong>Serviço:</strong> Progressiva + Escova R$ 246,00</p>
            <br />
            <p><strong>Data:</strong> 18/11/2024</p>
            <br />
            <p><strong>Horário:</strong> 10:30 - 11:15 <br></br> 11:15 - 12:00</p>
            <br />
            <p><strong>Forma de Pag:</strong> Pix</p>
            <br />
            <hr></hr>
            <p className="total"><strong>Total</strong> R$ 90,00</p>
        </div>
        <button className="botao">AGENDAR</button>
    </div>
    );
}