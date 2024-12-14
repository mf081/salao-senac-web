import React from 'react';
import './Agendamento.css'
import SideNavBar from '@/components/UI/SideNavBar/SideNavBar';
import { Calendar } from '@/components/UI/Calendar/Calendar';


export default function Agendamento() {
    return (
      <main className='agendamento-main'>
        <SideNavBar></SideNavBar>
        <Calendar></Calendar>
      </main>
    );
  }
  