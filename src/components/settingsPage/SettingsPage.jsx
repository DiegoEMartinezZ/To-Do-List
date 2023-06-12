import React from "react";
import "./settingsPage.css";
import { GeneralButton } from "../../resources/buttons/generalButtons/GeneralButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

export const SettingsPage = () => {
  const closeConfigHandler = () => {
    const closeSettingsWindow = document.querySelector(".settings-container");
    const settingsButton = document.querySelector(".config-button");
    settingsButton.classList.toggle("faTimes");
    closeSettingsWindow.classList.toggle("active");
  };

  return (
    <>
      <div className="settings-container">
        <h1 className="settings-general-title"> Configuración</h1>

        <section className="settings-wrap">
          <div className="settings-section-container">
            <h2 className="settings-section-title"> Informacion general</h2>
            <hr className="line-settings" />

            <form className="user-and-list-names-wrap">
              <label className="info-txt"> Nombre usuario: </label>
              <div className="user-and-list-edit">
                <input type="text" placeholder="Usuario" className="info" />
                <button className="button-edit">
                  <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                </button>
              </div>

              <label className="info-txt"> Nombre lista: </label>
              <div>
                <input type="text" placeholder="Lista" className="info" />
                <button className="button-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </div>
            </form>
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

          <button className="button-back-home" onClick={closeConfigHandler}>
            Volver a la app
          </button>
          <h5> © Diego Martínez 2023</h5>
        </section>
      </div>
    </>
  );
};
