import React from "react";
import './AgendamentoHeader.css';

// Definindo o tipo das props
type AgendamentoHeaderProps = {
    title: string;
    pAgendamento: string;
};

export function AgendamentoHeader({ title, pAgendamento }: AgendamentoHeaderProps) {
    return (
        <div className="agendamento-header-container">
            <h1 className="agendamento-header-title">{title}</h1>
            <p className="agendamento-header-p">{pAgendamento}</p>
        </div>
    );
}
