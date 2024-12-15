import React from "react";
import './AvailableTimes.css';

export function AvailableTimesSection() {
  return (
    <section className="available-times-section">
      <h1 className="available-times-title">Horários disponíveis</h1>

      <div className="avaliable-times-card-container">
      <div className="available-times-card">
        <div className="available-times-professional">
          <div className="professional-image"></div>
          <span className="professional-name">Profissional 1</span>
        </div>
        <div className="available-times-number">
          <button className="button-time-number">09:00</button>
          <button className="button-time-number">09:45</button>
          <button className="button-time-number">10:30</button>
          <button className="button-time-number">11:15</button>
          <button className="button-time-number">Mais &gt;</button>
          </div>
      </div>

      {/* Card 2 */}
      <div className="available-times-card">
        <div className="available-times-professional">
        <div className="professional-image"></div>
        <span className="professional-name">Profissional 2</span>
        </div>
        <div className="available-times-number">
          <button className="button-time-number">13:00</button>
          <button className="button-time-number">13:45</button>
          <button className="button-time-number">14:30</button>
          <button className="button-time-number">15:15</button>
          <button className="button-time-number">Mais &gt;</button>
          </div>
      </div>

      {/* Card 3 */}
      <div className="available-times-card">
        <div className="available-times-professional">
          <div className="professional-image"></div>
        <span className="professional-name">Profissional 3</span>
        </div>
        <div className="available-times-number">
          <button className="button-time-number">16:30</button>
          <button className="button-time-number">17:15</button>
          <button className="button-time-number">18:00</button>
          <button className="button-time-number">18:45</button>
          <button className="button-time-number">Mais &gt;</button>
          </div>

      </div>

      {/* Card 1 */}
      </div>
    </section>
  );
}
