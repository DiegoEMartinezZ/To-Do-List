import React from 'react';
import './mainPage.css';

const MainPage = () => {
  return (
    <>
      <div className="main-date-container">
        <section className="hamburguer-menu">
          <div> Boton de menu </div>
        </section>
        <section className="date-container">
          <h2 className="name-day"> Viernes </h2>
          <h3 className="exact-day"> Fecha del dia de hoy </h3>
        </section>
        <section className="time-container">
          <h1 className="time"> HORA </h1>
        </section>
      </div>
    </>
  );
};

export default MainPage;
