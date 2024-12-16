'use client';

import React, { useState, useCallback } from "react";
import calendarData from '/workspaces/salao-senac-web/public/json/calendar.json';
import './CalendarVersaoDois.css';
import { useRouter } from 'next/navigation';

// Definindo os tipos dos dados
type Dia = {
  data: string;
};

type Mes = {
  nome: string;
  ano: number;
  dias: Dia[];
};

export function CalendarVersaoDois() {

  const router = useRouter();
  const handleAgendamentoConcluidoClick = () => {
    router.push('/pages/AgendamentoCliente/AgendamentoConcluido');
  };

  
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
    <div id="CalendarSection" className="text-card-categories-container-home">
      <h3 className="text-card-categories-home">{`${currentMonth.nome}`}</h3>
      <div className="arrows-img-keys-home">
        <img
          className="arrow-img-home"
          src="/img/icons/seta-esquerda-calendario.png"
          width="100px"
          height="100px"
          onClick={() => goToMonth(-1)}
          alt="Seta para a esquerda"
        />
        <img
          className="arrow-img-home"
          src="/img/icons/seta-direita-calendario.png"
          width="100px"
          height="100px"
          onClick={() => goToMonth(1)}
          alt="Seta para a direita"
        />
      </div>
    </div>
  );

  return (
    <div className="calendar-container-home">
      <MonthNavigation />

      {/* Siglas dos dias da semana */}
      <div className="weekdays-home">
        {weekdays.map((day, index) => (
          <div className="weekday-home" key={index}>{day}</div>
        ))}
      </div>

      {/* Exibindo os dias do mês */}
      <div className="section-card-container-home">
        {currentMonth.dias.map((dia, index) => (
          <div className="card-calendar-home" key={`${currentMonthIndex}-${index}`}>
            <h3>{new Date(dia.data).getDate()}</h3> {/* Apenas o número do dia */}
          </div>
        ))}
      </div>

      <div className="information-calendar-container-home">
        <div className="information-line-home">
          <div className="information-line-ball-cinza-home"></div>
          <span>fechado</span>
        </div>

        <div className="information-line-home">
          <div className="information-line-ball-branca-home"></div>
          <span>disponivel</span>
        </div>

        <div className="information-line-home">
          <div className="information-line-ball-laranja-home"></div>
          <span>esgotado</span>
        </div>
      </div>
       <div className="button-confirmar-agendamento-container-home">
       <button type="submit" onClick={handleAgendamentoConcluidoClick} className="button-confirmar-agendamento-home">CONFIRMAR</button>
       </div>
    </div>
  );
}
