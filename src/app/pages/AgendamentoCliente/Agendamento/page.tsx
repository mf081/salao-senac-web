import React from 'react';
import './Agendamento.css';
import SideNavBar from '@/components/Layout/SideNavBar/SideNavBar';
import { CalendarVersaoDois } from '@/components/UI/CalendarVersaoDois/CalendarVersaoDois';
import { AgendamentoHeader } from '@/components/Layout/AgendamentoHeader/AgendamentoHeader';
import { AvailableTimesSection } from '@/components/Main-Sections/AvailableTimes/AvailableTimes';

export default function Agendamento() {
    
    return (
        <main className='agendamento-main'>
            <SideNavBar />
            <div className='main-agendamento-container'>
                <AgendamentoHeader title="Agendamento" />
                <div className='agendamento-container-column'>
                    <div className='agendamento-container-left'>
                        <CalendarVersaoDois />
                    </div>
                    <div className='agendamento-container-right'>
                        <AvailableTimesSection></AvailableTimesSection>
                    </div>
                </div>
            </div>
        </main>
    );
}
