import React from "react";
import './CarrinhoServicos.css';
import { useRouter } from 'next/navigation';

// Definindo o tipo para os serviços
interface Service {
    nome: string;
    preco?: number;
    precos?: Record<string, number>; // Um objeto com vários preços (opcional)
}

interface CarrinhoServicosProps {
    selectedServices: Service[];
}

export function CarrinhoServicos({ selectedServices }: CarrinhoServicosProps) {
    const router = useRouter();

    const handleCalendarioClick = () => {
        router.push('/pages/AgendamentoCliente/Agendamento');
    };

    const total = selectedServices.reduce((sum: number, service: Service) => {
        if ('preco' in service && service.preco) {
            return sum + service.preco;
        } else if ('precos' in service && service.precos) {
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
