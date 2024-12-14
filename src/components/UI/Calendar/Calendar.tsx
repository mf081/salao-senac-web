'use client';
import React, { useState, useCallback } from "react";
import "./Calendar.css";
import calendarData from '/workspaces/salao-senac-web/src/json/calendar.json';

type Dia = {
  data: string;
};

type Mes = {
  nome: string;
  ano: number;
  dias: Dia[];
};

export function Calendar() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const goToMonth = useCallback((direction: number) => {
    setCurrentMonthIndex((prevIndex) => {
      const nextIndex = (prevIndex + direction + calendarData.meses.length) % calendarData.meses.length;
      return nextIndex;
    });
  }, []);

  const currentMonth: Mes = calendarData.meses[currentMonthIndex];

  const weekdays = ["S", "D", "S", "T", "Q", "Q", "S"]; // Siglas dos dias da semana

  const MonthNavigation = () => (
    <div id="CalendarSection" className="text-card-categories-container">
      <h3 className="text-card-categories">{`${currentMonth.nome}`}</h3>
      <div className="arrows-img-keys">
        <img
          className="arrow-img"
          src="/img/icons/icon-seta-esquerda.png"
          width="100px"
          height="100px"
          onClick={() => goToMonth(-1)}
          alt="Seta para a esquerda"
        />
        <img
          className="arrow-img"
          src="/img/icons/icon-seta-direita.png"
          width="100px"
          height="100px"
          onClick={() => goToMonth(1)}
          alt="Seta para a direita"
        />
      </div>
    </div>
  );

  return (
    <section className="section-02-container">
      <MonthNavigation />

      {/* Siglas dos dias da semana */}
      <div className="weekdays">
        {weekdays.map((day, index) => (
          <div className="weekday" key={index}>{day}</div>
        ))}
      </div>

      {/* Exibindo os dias do mês */}
      <div className="section-card-container">
        {currentMonth.dias.map((dia, index) => (
          <div className="card" key={`${currentMonthIndex}-${index}`}>
            <h3>{new Date(dia.data).getDate()}</h3> {/* Apenas o número do dia */}
          </div>
        ))}
      </div>
      <div className="information-calendar-container">
        <div className="information-line">
          <div className="information-line-ball-cinza"></div>
          <span>fechado</span>
        </div>

        <div className="information-line">
        <div className="information-line-ball-branca"></div>
        <span>disponivel</span>
        </div>

        <div className="information-line">
        <div className="information-line-ball-laranja"></div>
        <span>esgotado</span>
        </div>
      </div>
      <button type="submit" className="button-confirmar-agendamento">CONFIRMAR</button>

    </section>
  );
}
