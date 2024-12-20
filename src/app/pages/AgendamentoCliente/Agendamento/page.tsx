'use client';

import React, { useEffect, useState } from 'react';
import './Agendamento.css';
import SideNavBar from '@/components/Layout/SideNavBar/SideNavBar';
import { CalendarVersaoDois } from '@/components/UI/CalendarVersaoDois/CalendarVersaoDois';
import { AgendamentoHeader } from '@/components/Layout/AgendamentoHeader/AgendamentoHeader';
import { AvailableTimesSection } from '@/components/Main-Sections/AvailableTimes/AvailableTimes';

export default function Agendamento() {
    const [isClient, setIsClient] = useState(false);

    // Verifica se o código está sendo executado no cliente
    useEffect(() => {
        setIsClient(true); // Quando o componente é montado no cliente
    }, []);

    // Retorna um componente de loading ou outro conteúdo enquanto o código não é executado no cliente
    if (!isClient) {
        return <div>Loading...</div>;
    }

    return (
        <main className='agendamento-main'>
            <SideNavBar />
            <div className='main-agendamento-container'>
                <AgendamentoHeader title="Agendamento" pAgendamento='2/3 Selecione data e hora disponiveis e aperte em confirmar.'/>
                <div className='agendamento-container-column'>
                    <div className='agendamento-container-left'>
                        <CalendarVersaoDois />
                    </div>
                    <div className='agendamento-container-right'>
                        <AvailableTimesSection />
                    </div>
                </div>
            </div>
        </main>
    );
}
