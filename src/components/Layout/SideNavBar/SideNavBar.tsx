'use client';

import React from 'react';
import './SideNavBar.css';
import { useRouter } from 'next/navigation';

export default function SideNavBar() {

  const router = useRouter();
  const handleEditarPerfilClick = () => {
    router.push('/pages/AgendamentoCliente/EditarPerfil');
  };

  const handleHistoricoClick = () => {
    router.push('/pages/AgendamentoCliente/HistoricoAgendamento');
  };
  

  return (
    <main>
      <nav className="sidebar">
        <div className="user-profile">
          <img src="/img/mulher-branca.png" alt="Foto de perfil de Amanda Tavares" />
        </div>
        <span className="sidebar-username">Amanda Tavares</span>

        <div className="buttons">
          <button onClick={handleEditarPerfilClick} className="button-side-bar"><img src="/img/icons/icon-Account.png" className='buttons-side-bar-icons img-edit-profile'></img>Editar Perfil</button>
          <button onClick={handleHistoricoClick} className="button-side-bar"><img src="/img/icons/icon-Clock.png" className='buttons-side-bar-icons img-edit-historico'></img>Historico</button>
          <button className="button-side-bar"><img src="/img/icons/icon-Logout-Rounded.png" className='buttons-side-bar-icons img-edit-off'></img>Sair</button>
        </div>
      </nav>
    </main>
  );
}

