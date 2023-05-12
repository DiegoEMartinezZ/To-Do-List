import React from "react";
import { GeneralButton } from "../../resources/buttons/generalButtons/GeneralButton";
import "./landingPage.css";

export const LandingPage = () => {
  return (
    <>
      <main className="landing-page-container">
        <section className="title-subtitle-container">
          <h1 className="app-title"> To-Do-List</h1>
          <h3 className="app-subtitle"> version 1.0 </h3>
          <hr className="line" />
        </section>

        <section className="introduction-container">
          <p className="app-introduction">
            Proyecto enfocado en guardar, de manera organizada y coherente, una
            lista de tareas por realizar según las necesidades del usuario.
            Permite dar a elegir si la tarea es importante, hora en la que
            comienza la tarea y nombre de la tarea. Cuenta con una opción de
            filtro entre las tareas registradas, estas son:
            <br />
            <br />
            <em>
              1. Total de las tareas 2. Tareas completadas 3. Tareas incompletas
              4. Tareas favoritas.
            </em>
            <br />
            <br />
            Permite poner tareas en los distintos días del mes actual.
            <br />
            CRUD efectivo de las tareas guardadas.
            <br />
            <br />
            <strong>
              Este proyecto fue creado en React Js , CSS y la libreria Moment.
            </strong>
          </p>
        </section>

        <GeneralButton titleButton={"Empezar DEMO"} page={"/home"} />
      </main>
    </>
  );
};
