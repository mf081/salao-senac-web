import React from "react";
import './CarrinhoServicos.css';
import { useRouter } from 'next/navigation';


export function CarrinhoServicos({ selectedServices }) {
    const router = useRouter();
    const handleCalendarioClick = () => {
        router.push('/pages/AgendamentoCliente/Agendamento');
    };
    




    const total = selectedServices.reduce((sum, service) => {
        if ('preco' in service) {
            return sum + service.preco;
        } else if ('precos' in service) {
            return sum + Math.min(...Object.values(service.precos));
        }
        return sum;
    }, 0);

    return (
        <div className="resumo-conteudo">
            <h2>Resumo da compra</h2>
            <div className="info">
                {selectedServices.map((service, index) => (
                    <p key={index}><strong>Serviço:</strong> {service.nome}</p>
                ))}
                <hr />
                <p className="total"><strong>Total:</strong> R$ {total.toFixed(2)}</p>
            </div>
            <button onClick={handleCalendarioClick} className="botao">AGENDAR</button>
        </div>
    );
}
