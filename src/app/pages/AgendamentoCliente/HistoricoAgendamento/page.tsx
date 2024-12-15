import React from 'react';
import './Historico.css';
import SideNavBar from '@/components/Layout/SideNavBar/SideNavBar';

export default function Historico() {
  return (
    <main>
      <div className="container-top">
        {/* Sidebar alinhada à esquerda */}
        <SideNavBar />

        {/* Conteúdo alinhado à direita */}
        <section className="container-right">
          {/* Barra de busca */}
          <div className="search-bar">
            <div className="container-search">
              <img src="/img/icons/icon-busca.png" alt="" />
              <input
                type="text"
                placeholder="ID Agendamento ou Serviço"
                className="search-input"
              />
            </div>
          </div>

          {/* Comprovantes */}
          <div className="container-comprovantes-historico">
            <div className="itens-comprovantes-historico">
              <div className="item-header-comprovante">
                <span className="item-id-comprovante">ID 0001511004 -</span>
                <span className="item-description-comprovante">Progressiva + Escova</span>
                <span className="item-date-comprovante">18/11/24</span>
              </div>
              <div className="item-footer-comprovante">VER COMPROVANTE</div>
            </div>

            <div className="itens-comprovantes-historico">
              <div className="item-header-comprovante">
                <span className="item-id-comprovante">ID 0001510004 -</span>
                <span className="item-description-comprovante">Depilação</span>
                <span className="item-date-comprovante">05/10/24</span>
              </div>
              <div className="item-footer-comprovante">VER COMPROVANTE</div>
            </div>
            <div className="itens-comprovantes-historico">
              <div className="item-header-comprovante">
                <span className="item-id-comprovante">ID 0001505004 -</span>
                <span className="item-description-comprovante">Trança Nago</span>
                <span className="item-date-comprovante">21/03/24</span>
              </div>
              <div className="item-footer-comprovante">VER COMPROVANTE</div>
            </div>
          </div>
            
        </section>
      </div>
    </main>
  );
}
