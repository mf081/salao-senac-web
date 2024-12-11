import * as React from "react";
import "./Catalog.css";

export function ServicesSection() {
  return (
    <section className="section-02-container">
      <h2>Serviços</h2>
      <h1>Ofertados</h1>
      <div className="text-card-categories-container">
      <img className="arrow-img"  src="/img/icons/icon-seta-esquerda.png" width="100px" height="100px" />
      <h3 className="text-card-categories">Transformação de Formas e Texturas dos Cabelos Femininos</h3>
      <img className="arrow-img" src="/img/icons/icon-seta-direita.png" width="100px" height="100px" />
      </div>
      <div className="section-card-container">
        <div className="card">
          <h3>Lavada Especial</h3>
          <p className="description">
            Amet minim mollit non deserunt ullamco est minim mollit.
          </p>
          <p className="price">R$ 150.00</p>
        </div>
        <div className="card">
          <h3>Progressiva</h3>
          <p className="description">
            Amet minim mollit non deserunt ullamco est minim mollit.
          </p>
          <p className="price">R$ 123.00</p>
        </div>
        <div className="card">
          <h3>Escova</h3>
          <p className="description">
            Amet minim mollit non deserunt ullamco est minim mollit.
          </p>
          <p className="price">R$ 123.00</p>
        </div>
        <div className="card">
          <h3>Luzes</h3>
          <p className="description">
            Amet minim mollit non deserunt ullamco est minim mollit.
          </p>
          <p className="price">R$ 150.00</p>
        </div>
        <div className="card">
          <h3>Depilação</h3>
          <p className="description">Lorem ipsum fina iadsdna.</p>
          <p className="price">R$ 150.00</p>
        </div>
        <div className="card">
          <h3>Coloração</h3>
          <p className="description">
            Amet minim mollit non deserunt ullamco est minim mollit.
          </p>
          <p className="price">R$ 123.00</p>
        </div>
        <div className="card">
          <h3>Sobrancelha</h3>
          <p className="description">
            Amet minim mollit non deserunt ullamco est minim mollit.
          </p>
          <p className="price">R$ 123.00</p>
        </div>
        <div className="card">
          <h3>Selagem</h3>
          <p className="description">
            Amet minim mollit non deserunt ullamco est minim mollit.
          </p>
          <p className="price">R$ 123.00</p>
        </div>
      </div>
      <div className="section-02-location">
        <img src="/img/icons/place-icon.png" alt="Localização" />
        <h1>
          Pernambuco - Av. Visconde de Suassuna, 500 - Santo Amaro - Recife
        </h1>
      </div>
    </section>
  );
}
