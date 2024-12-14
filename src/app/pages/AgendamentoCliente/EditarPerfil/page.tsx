import React from 'react';
import './EditarPerfil.css';

export default function EditarPerfil() {
  return (
    <main>
      <div className='back-button'>
        <a>
          <img src='/img/icons/seta-voltar.png'></img>
        </a>
        <p className="btn-voltar">Voltar</p>
      </div>
      <div className="profile-card">
        {/* Imagem do perfil */}
        <img
          src="/img/mulher-branca.png"
          alt="Foto do Perfil"
          className="profile-img"
        />
        <a href="#" className="change-image">
          Mudar imagem
        </a>

        {/* Nome */}
        <div className="input-group">
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
        <button className="btn-salvar">SALVAR</button>
      </div>
    </main>
  );
}
