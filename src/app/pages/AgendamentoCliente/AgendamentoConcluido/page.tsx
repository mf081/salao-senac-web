
import React from 'react';
import './AgendamentoConcluido.css'
import SideNavBar from '@/components/Layout/SideNavBar/SideNavBar';
import DownloadButton from '/workspaces/salao-senac-web/src/components/Button/ButtonDownloadPDF/DownloadButton'; // Corrigi o caminho para a importação


export default function AgendamentoConcluido (){
    return(
        <main>
            <SideNavBar></SideNavBar>
            <section className="summary-box">
                <div className='.container-sumary'>

                    <h2>Agendamento realizado com sucesso !</h2>
                    <p>O pagamento deve ser realizado no local</p>

                    <div className="info-cards">
                        <div className="card">
                                <p className="label">Id agendamento:</p>
                                <p className="value">000511004</p>
                        </div>
                        <div className="card">
                            <p className="label">Data agendamento:</p>
                            <p className="value">18/11/2024</p>
                        </div>
                        <div className="card">
                            <p className="label">Serviço:</p>
                            <p className="value">Progressiva + Escova</p>
                        </div>
                        <div className="card">
                            <p className="label">Funcionário(a):</p>
                            <p className="value">Marta Menezes</p>
                        </div>
                    </div>

                    <div className="download">
                        <p>Gere seu PDF</p>
                        <DownloadButton>
                            
                        </DownloadButton>
                            
                    </div>
            
                </div>
            </section>
        </main>
    );
}