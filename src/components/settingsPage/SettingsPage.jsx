import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { IconCheck } from "@tabler/icons-react";
import { SettingsContext } from "../../resources/settingsContext/SettingsContext";
import { useContext } from "react";
import "./settingsPage.css";

export const SettingsPage = () => {
  /*  
  Back to the home
   */
  const {
    newUserName,
    newListName,
    changeNameHandler,
    changeNameButtonHandler,
    changeListNameHandler,
    changeListNameButtonHandler,
    closeConfigHandler,
  } = useContext(SettingsContext);

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
              <section className="user-and-list-edit">
                <IconCheck className="valid-info" />
                <input
                  type="text"
                  value={newUserName}
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
              </section>

              <label className="info-txt"> Nombre lista: </label>
              <section className="user-and-list-edit">
                <IconCheck className="valid-info-02" />
                <input
                  type="text"
                  value={newListName}
                  placeholder="Lista"
                  className="info"
                  onChange={changeListNameHandler}
                />
                <button
                  className="button-edit"
                  onClick={changeListNameButtonHandler}
                >
                  <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                </button>
              </section>
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
