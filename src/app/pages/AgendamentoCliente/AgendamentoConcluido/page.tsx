
import React from 'react';
import './AgendamentoConcluido.css'
import SideNavBar from '@/components/Layout/SideNavBar/SideNavBar';
import { AgendamentoHeader } from '@/components/Layout/AgendamentoHeader/AgendamentoHeader';


export default function AgendamentoConcluido (){
    return(
        <main className='agendamento-concluido-main'>
            <SideNavBar></SideNavBar>
            <section className='agendamento-concluido-section'>
                <AgendamentoHeader title="Agendamento" pAgendamento='3/3 Verifique seu agendamento e baixe'/>
                

            <section className="summary-box">
                
                <div className='.container-sumary'>

                    <h2>Agendamento realizado com sucesso !</h2>
                    <p>O pagamento deve ser realizado no local</p>

                    <div className="info-card-agendamento-concluidos">
                        <div className="card-agendamento-concluido">
                                <p className="label">Id agendamento:</p>
                                <p className="value">000511004</p>
                        </div>
                        <div className="card-agendamento-concluido">
                            <p className="label">Data agendamento:</p>
                            <p className="value">18/11/2024</p>
                        </div>
                        <div className="card-agendamento-concluido">
                            <p className="label">Serviço:</p>
                            <p className="value">Progressiva + Escova</p>
                        </div>
                        <div className="card-agendamento-concluido">
                            <p className="label">Funcionário(a):</p>
                            <p className="value">Marta Menezes</p>
                        </div>
                    </div>

                    <div className="download">
                        <p>Gere seu PDF</p>
                            
                    </div>
            
                </div>
            </section>

            </section>
        </main>
    );
}