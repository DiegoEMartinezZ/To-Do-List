import React from "react";
import { GeneralButton } from "../../resources/buttons/GeneralButton";
import "./settingsPage.css";

export const SettingsPage = () => {
  return (
    <>
      <div className="settings-container">
        <h1 className="settings-general-title"> Configuración</h1>

        <section className="settings-wrap">
          <div className="settings-section-container">
            <h2 className="settings-section-title"> Informacion general</h2>
            <hr className="line-settings" />

            <section className="user-and-list-names-wrap">
              <h3 className="info"> Nombre de usuario</h3>
              <h3></h3>
              <h3 className="info"> Nombre de tu lista </h3>
              <h3></h3>
            </section>
          </div>

          <div className="settings-section-container">
            <h2 className="settings-section-title"> Estadísticas </h2>
            <hr className="line-settings" />

            <div className="tasks-stadistics-wrap">
              <h3 className="info">
                {" "}
                <strong> X Tareas creadas </strong> desde el
                <br />
                <strong> X de XXXX de XXXX</strong>
              </h3>
            </div>
          </div>

          <div className="settings-section-container">
            <h2 className="settings-section-title"> Actividad reciente </h2>
            <hr className="line-settings" />

            <div className="recent-activity-wrap">
              <h3 className="info">
                {" "}
                <strong> Editaste X Tareas </strong> para hoy.
                <br />
                <strong> Tienes X tareas importantes. </strong>
              </h3>
            </div>
          </div>

          <GeneralButton titleButton={"Volver a la APP"} page={"/home"} />
          <h5> © Diego Martínez 2023</h5>
        </section>
      </div>
    </>
  );
};
