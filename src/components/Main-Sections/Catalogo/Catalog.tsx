import * as React from "react";
import "./Catalog.css";

export function ServicesSection() {
  return (
    <section className="section-02-container">
      <h2>Serviços</h2>
      <h1>Ofertados</h1>
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
    
    </section>
  );
}
