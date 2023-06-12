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
            Este proyecto se realizó con el objetivo de emplear un CRUD{" "}
            <em>(Create, Read, Update and Delete)</em> que significa la
            posibilidad de crear, leer, actualizar y borrar tipos de información
            que el usuario haya ingresado dentro de la aplicación. Permite
            también un filtro entre cada una de las tareas, teniendo así mayor
            control a la hora de ver qué tarea tiene más prioridad, cuales ya se
            han realizado y cuáles están pendientes.
          </p>
          <br />
          <p>
            Permite cambiar los colores por defecto de la aplicación, cambiar el
            nombre de la lista de tareas y cambiar el nombre del usuario
          </p>
        </section>

        <GeneralButton titleButton={"Empezar DEMO"} page={"/home"} />
      </main>
    </>
  );
};
