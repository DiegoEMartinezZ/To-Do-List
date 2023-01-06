import React from 'react';
import Button from '../../components/button/Button';
import './home.css';

const Home = () => {
  return (
    <div className="principal">
      <section className="main-menu-container">
        <h1 className="main-menu-title"> Organiza tus tareas </h1>
        <h3 className="main-menu-subtitle"> ¡Empieza ahora! </h3>
      </section>
      <Button page={'/ToDoList'} titleButton={'DEMO'} />
    </div>
  );
};

export default Home;
