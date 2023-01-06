import React from 'react';
import './mainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MainPage = () => {
  let date = new Date();

  const numberDay = {
    1: 'Domingo',
    2: 'Lunes',
    3: 'Martes',
    4: 'Miercoles',
    5: 'Jueves',
    6: 'Viernes',
    7: 'Sabado',
  };

  let spanishNameDay = numberDay[date.getDate()];

  return (
    <>
      <div className="main-date-container">
        <nav className="hamburguer-menu">
          <FontAwesomeIcon icon={faBars} />
        </nav>

        <section className="current-date-container">
          <div className="date-container">
            <h2 className="name-day"> {spanishNameDay}</h2>
            <h3 className="exact-day"> {date.toLocaleDateString()} </h3>
          </div>
          <div className="time-container">
            <h1 className="time"> API Clock</h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPage;
