import React from 'react';
import './EditarPerfil.css';
import SideNavBar from '@/components/Layout/SideNavBar/SideNavBar';
import AvatarProfile from '@/components/UI/AvatarProfile/AvatarProfile';
export default function EditarPerfil() {
  return (
    <main className='editar-perfil-main'>
      <div className='back-button-editar-perfil'>
        <SideNavBar></SideNavBar>
      </div>
      <div className='teste'>
        <div className="profile-card-editar-perfil">
          {/* Imagem do perfil */}
          {/* <img
            src="/img/mulher-branca.png"
            alt="Foto do Perfil"
            className="profile-img-editar-perfil"
          /> */}
          <AvatarProfile></AvatarProfile>
          <a href="#" className="change-image">
            Mudar imagem
          </a>

          {/* Nome */}
          <div className="input-group-editar-perfil ">
            <label htmlFor="name">Nome de Exibição*</label>
            <input
              type="text"
              id="name"
              placeholder="Amanda Tavares"
            />
          </div>

          {/* CPF */}
          <div className="input-group">
            <label htmlFor="cpf">CPF*</label>
            <input
              type="text"
              id="cpf"
              placeholder="179 xxx xxx 01"
            />
          </div>

          {/* Botão de salvar */}
          <button className="btn-salvar-editar-perfil">SALVAR</button>
        </div>
      </div>
    </main>
  );
}
