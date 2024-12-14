import React from 'react';
import './SideNavBar.css';

export default function SideNavBar() {
  return (
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
    </main>
  );
}

