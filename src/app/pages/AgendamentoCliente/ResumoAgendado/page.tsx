import React from 'react';
import './ResumoAgendado.css';


export default function ResumoAgendado (){
    return(
        <main>
            
            <nav className="sidebar">
                <div className="user-profile">
                    <img src="/img/mulher-branca.png" alt="Foto de perfil de Amanda Tavares" />
                </div>
                <span className="sidebar-username">Amanda Tavares</span>

                <div className="buttons">
                    <button className="button-side-bar"><img src="/img/icons/icon-Account.png" className='buttons-side-bar-icons'></img>Editar Perfil</button>
                    <button className="button-side-bar"><img src="/img/icons/icon-Clock.png" className='buttons-side-bar-icons'></img>Historico</button>
                    <button className="button-side-bar"><img src="/img/icons/icon-Logout-Rounded.png" className='buttons-side-bar-icons'></img>Sair</button>
                </div>
            </nav>

            <div className='resumo-container'>
                <h2 className='title-resumo'>Resumo</h2>
                <div className='quadradinho-de-oito'>
                    <div className='quadradinho-de-quatro'>
                        <table>
                            <caption>Resumo da compra</caption>
                            <thead>
                                <tr>
                                    <th>Serviço</th>
                                    <th>Data</th>
                                    <th>Horário</th>
                                    <th>Forma de Pagamento</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Progressiva + Escova</td>
                                    <td>15/12/2024</td>
                                    <td>10:30 - 11:15</td>
                                    <td>Pix</td>
                                    <td>R$ 246,00</td>
                                </tr>
                                <tr>
                                    <td>Corte de Cabelo</td>
                                    <td>16/12/2024</td>
                                    <td>09:30</td>
                                    <td>Dinheiro</td>
                                    <td>R$ 50,00</td>
                                </tr>
                                <tr>
                                    <td>Reparo de Eletrônico</td>
                                    <td>17/12/2024</td>
                                    <td>16:00</td>
                                    <td>Pix</td>
                                    <td>R$ 200,00</td>
                                </tr>
            
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </main>
    );
}
