import * as React from 'react';
import "./testimonials.css";

export function TestimonialsContainer() {  // Renomeando para PascalCase
    return (
        <section className="testimonials-container">
        <h2>DEPOIMENTOS</h2>
        <div className="testimonial-card">
            <div className="testiomnials-text">
                <img src="/img/aspas.png" alt="Aspas" height="35px"/>
                <p>
                    Arat minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </div>
            <div className="testimonial-profile">
                <img src="/img/jessika.png" alt="Foto de Jéssika Jones"/>
                <div className="profile-info">
                    <p className="profile-name">Jéssika Jones</p>
                    <p className="profile-role">Advogada</p>
                </div>
            </div>
        </div>
    </section>
    );
}
