'use client';
import React, { useState, useEffect } from 'react';
import './SideNavBar.css';
import { useRouter } from 'next/navigation';
import AvatarProfile from '@/components/UI/AvatarProfile/AvatarProfile';

export default function SideNavBar() {
  const [nomeUsuario, setNomeUsuario] = useState('Usuário');
  const router = useRouter();

  // Carregar o nome do usuário do localStorage após a montagem do componente
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    setNomeUsuario(storedUser.nome || 'Usuário');
  }, []); // Executa apenas uma vez, após a montagem

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
        <AvatarProfile />
        <span className="sidebar-username">Seja Bem Vindo {nomeUsuario}!</span>

        <div className="buttons">
          <button onClick={handleEditarPerfilClick} className="button-side-bar">
            Editar Perfil
          </button>
          <button onClick={handleHistoricoClick} className="button-side-bar">
            Histórico
          </button>
          <button onClick={handleHomeClick} className="button-side-bar">
            Sair
          </button>
        </div>
      </nav>
    </main>
  );
}
