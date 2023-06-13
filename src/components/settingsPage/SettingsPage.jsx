import React, { useState } from "react";
import "./settingsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { IconCheck, IconCheckbox, IconEyeCheck } from "@tabler/icons-react";

export const SettingsPage = () => {
  const closeConfigHandler = () => {
    const closeSettingsWindow = document.querySelector(".settings-container");
    const settingsButton = document.querySelector(".config-button");
    settingsButton.classList.toggle("faTimes");
    closeSettingsWindow.classList.toggle("active");
  };

  const [newName, setNewName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const changeNameHandler = (e) => {
    setNewName(e.target.value);
  };

  const changeNameButtonHandler = (e) => {
    e.preventDefault();
    setDisplayName(`${newName}`);
    const validInfo = document.querySelector(".valid-info");
    validInfo.classList.toggle("active");
  };

  return (
    <>
      <div className="settings-container">
        <h1 className="settings-general-title"> Configuración </h1>

        <section className="settings-wrap">
          <div className="settings-section-container">
            <h2 className="settings-section-title"> Informacion general</h2>
            <hr className="line-settings" />

            <form className="user-and-list-names-wrap">
              <label className="info-txt">Nombre usuario: </label>
              <div className="user-and-list-edit">
                <IconCheck className="valid-info" />
                <input
                  type="text"
                  value={newName}
                  placeholder="Usuario"
                  className="info"
                  onChange={changeNameHandler}
                />
                <button
                  className="button-edit"
                  onClick={changeNameButtonHandler}
                >
                  <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                </button>
                <div className="valid-text"></div>
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
