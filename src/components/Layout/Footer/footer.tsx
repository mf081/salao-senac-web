'use client';
import React from 'react';
import './footer.css';
import './footer-bar.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Importando o componente Image

export function Footer() {
  const router = useRouter();
  
  const handleSobreNosClick = () => {
    router.push('/#AboutUsSection'); // Navegação com hash
  };

  const handleFooterHome = () => {
    router.push('/'); // Navegação com hash
  };

  const handleContatoClick = () => {
    router.push('/#AdressSection'); // Navegação com hash
  };

  const handleAgendarClick = () => {
    router.push('/pages/LoginCliente/Login');
  };

  return (
    <footer>
      <div className="footer-container">
        {/* Logo e texto de descrição */}
        <div className="footer-logo">
          <p className="text-image-p">
            “Beleza e aprendizado em harmonia: transforme seu futuro no Salão
            Empresa Pedagógica do Senac Recife”.
          </p>
        </div>

        {/* Navegação e serviços */}
        <div className="footer-services-contacts">
          {/* Navegação */}
          <div className="footer-services">
            <h3 className="footer-title">Navegação</h3>
            <ul>
              <li className="services-footer-li" onClick={handleFooterHome}>Home</li>
              <li className="services-footer-li" onClick={handleSobreNosClick}>Sobre Nós</li>
              <li className="services-footer-li" onClick={handleContatoClick}>Contato</li>
              <li className="services-footer-li" onClick={handleAgendarClick}>Agendar Horário</li>
              <li className="services-footer-li"></li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="footer-contact">
            <h3 className="footer-title">Serviços</h3>
            <ul>
              <li className="services-footer-li">Corte Feminino</li>
              <li className="services-footer-li">Escova</li>
              <li className="services-footer-li">Luzes</li>
              <li className="services-footer-li">
                <a>Mais serviços</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Informações de contato (fora do footer-container) */}
      <div className="footer-container-last-line">
        <p className="text-image-p">
          Pernambuco - Av. Visconde de Suassuna, 500 - Santo Amaro - Recife |{' '}
          (81) 3413 6666 |{' '}
          <a href="mailto:contato@senac.br">contato@senac.br</a>
        </p>
        <span className="text-image-p">(81) 3413 6666</span>
        <a className="text-image-p" href="mailto:contato@senac.br">
          contato@senac.br
        </a>

        {/* Ícones de redes sociais */}
        <div className="icons-footer-line">
          <a
            href="https://www.instagram.com/senacpe/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/icons/instagram-icon.png"
              width={18}
              height={19}
              alt="Instagram"
              className="header-icons"
            />
          </a>
          <a
            href="https://www.facebook.com/senacpe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/icons/facebook-icon.png"
              width={20}
              height={21}
              alt="Facebook"
              className="header-icons"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/senacpe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/icons/linkedin-icon.png"
              width={20}
              height={21}
              alt="LinkedIn"
              className="header-icons"
            />
          </a>
          <a
            href="https://www.youtube.com/user/SenacPernambuco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/icons/youtube-icon.png"
              width={20}
              height={21}
              alt="YouTube"
              className="header-icons"
            />
          </a>
        </div>
      </div>

      {/* Barra de rodapé */}
      <div className="footer-bar">
        <div className="text-footer-bar">
          <p>© 2024 Salão SENAC - Todos Direitos Reservados</p>
        </div>
      </div>
    </footer>
  );
}
