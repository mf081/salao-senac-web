'use client';

import React, { useState, useEffect } from 'react';
import './EditarPerfil.css';
import SideNavBar from '@/components/Layout/SideNavBar/SideNavBar';
import AvatarProfile from '@/components/UI/AvatarProfile/AvatarProfile';

export default function EditarPerfil() {
  const [nome, setNome] = useState(''); // Estado para armazenar o nome do usuário
  const [isClient, setIsClient] = useState(false);

  // UseEffect para garantir que o código só rode no cliente
  useEffect(() => {
    setIsClient(true); // Marca que o código está no lado do cliente
  }, []);

  // Carregar o nome do localStorage quando o componente for montado
  useEffect(() => {
    if (isClient) {
      const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
      setNome(storedUser.nome || 'Usuário'); // Define o nome padrão como 'Usuário'
    }
  }, [isClient]);

  // Função para salvar o nome no localStorage
  const handleSalvar = () => {
    if (isClient) {
      const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
      storedUser.nome = nome; // Atualiza o nome no objeto
      localStorage.setItem('user', JSON.stringify(storedUser)); // Salva no localStorage
      alert('Nome atualizado com sucesso!');
    }
  };

  if (!isClient) {
    return <div>Loading...</div>; // Exibe algo enquanto o código está esperando no cliente
  }

  return (
    <main className="editar-perfil-main">
      <div className="back-button-editar-perfil">
        <SideNavBar />
      </div>
      <div className="teste">
        <div className="profile-card-editar-perfil">
          {/* Avatar */}
          <AvatarProfile />
          <a href="#" className="change-image">
            Mudar imagem
          </a>

          {/* Nome dinâmico */}
          <div className="input-group-editar-perfil">
            <label htmlFor="name">Nome de Exibição*</label>
            <input
              type="text"
              id="name"
              placeholder="Nome de Exibição"
              value={nome}
              onChange={(e) => setNome(e.target.value)} // Atualiza o estado ao digitar
            />
          </div>

          {/* CPF */}
          <div className="input-group">
            <label htmlFor="cpf">CPF*</label>
            <input type="text" id="cpf" placeholder="179 xxx xxx 01" />
          </div>

          {/* Botão de salvar */}
          <button className="btn-salvar-editar-perfil" onClick={handleSalvar}>
            SALVAR
          </button>
        </div>
      </div>
    </main>
  );
}
