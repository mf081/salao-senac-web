'use client';
import React from 'react';
import './SideNavBar.css';
import { useRouter } from 'next/navigation';
import AvatarProfile from '@/components/UI/AvatarProfile/AvatarProfile';

export default function SideNavBar() {
  const router = useRouter();

  // Obtém o nome do usuário do localStorage
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  const nomeUsuario = storedUser.nome || 'Usuário';

  const handleEditarPerfilClick = () => {
    router.push('/pages/AgendamentoCliente/EditarPerfil');
  };

  const handleHistoricoClick = () => {
    router.push('/pages/AgendamentoCliente/HistoricoAgendamento');
  };
  const handleHomeClick = () => {
    router.push('/'); // Voltar para a página inicial
};

  return (
    <main>
      <nav className="sidebar">
        {/* <div className="user-profile">
          <img src="/img/mulher-branca.png" alt="Foto de perfil" />
        </div> */}
        <AvatarProfile></AvatarProfile>
        <span className="sidebar-username">Seja Bem Vindo {nomeUsuario}!</span>

        <div className="buttons">
          <button onClick={handleEditarPerfilClick} className="button-side-bar">Editar Perfil</button>
          <button onClick={handleHistoricoClick} className="button-side-bar">Histórico</button>
          <button onClick={handleHomeClick} className="button-side-bar">Sair</button>
        </div>
      </nav>
    </main>
  );
}
