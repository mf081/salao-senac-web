import React from 'react';
import './ResumoAgendado.css';
import SideNavBar from '@/components/Layout/SideNavBar/SideNavBar';
import { AgendamentoHeader } from '@/components/Layout/AgendamentoHeader/AgendamentoHeader';
import { CarrinhoServicos } from '@/components/UI/CarrinhoServicos/CarrinhoServicos';
import { EscolherServico } from '@/components/UI/EscolherServico/EscolherServico';

export default function ResumoAgendado (){
    return(
        <main>
            <SideNavBar></SideNavBar>
            <div className='resumo-agendado-container'>
                <AgendamentoHeader title="Agendamento" />
                

            <div className="container-para-row-resumo-agendado">
                <EscolherServico></EscolherServico>
                <CarrinhoServicos></CarrinhoServicos>
            </div>
            </div>
            


        </main>
    );
}
