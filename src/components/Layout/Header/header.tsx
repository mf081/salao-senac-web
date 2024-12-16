import React from "react";
import Image from "next/image"; // Importando o componente Image do Next.js
import "./header.css";

export function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-contact">
          <Image
            src="/img/icons/envelope-paper-icon.png"
            width={18}
            height={19}
            className="header-icons"
            alt="Email"
          />
          <span className="header-text">senac@pe.senac.br</span>
          <Image
            src="/img/icons/telephone-icon.png"
            width={16}
            height={19}
            className="header-icons"
            alt="Telefone"
          />
          <span className="header-text">(81)3413.6688</span>
          <Image
            src="/img/icons/whatsapp-icon.png"
            width={18}
            height={19}
            className="header-icons"
            alt="WhatsApp"
          />
          <span className="header-text">(81)99999-9999</span>
        </div>
        <div className="header-contact-right">
          <span className="header-text">Siga-nos:</span>
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
    </header>
  );
}
