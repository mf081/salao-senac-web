import React from "react";
import "./header.css";

export function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-contact">
          <img src="/img/icons/envelope-paper-icon.png" width="18" height="19" className="header-icons" alt="Email" />
          <span className="header-text">salão.senac@gmail.com</span>
          <img src="/img/icons/telephone-icon.png" width="16" height="19" className="header-icons" alt="Telefone" />
          <span className="header-text">(81)99999-9999</span>
          <img src="/img/icons/whatsapp-icon.png" width="18" height="19" className="header-icons" alt="WhatsApp" />
          <span className="header-text">(81)99999-9999</span>
        </div>
        <div className="header-contact-right">
          <span className="header-text">Siga-nos:</span>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/img/icons/instagram-icon.png" width="18" height="19" alt="Instagram" className="header-icons" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="/img/icons/tiktok-icon.png" width="19" height="23" alt="TikTok" className="header-icons" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/img/icons/facebook-icon.png" width="20" height="21" alt="Facebook" className="header-icons" />
          </a>
        </div>
      </div>
    </header>
  );
}
