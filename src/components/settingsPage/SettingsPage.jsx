import React, { useContext } from "react";
import { ToDoListContext } from "../../resources/toDoListContext/ToDoListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { IconCheck } from "@tabler/icons-react";
import "./settingsPage.css";

export const SettingsPage = () => {
  const {
    newUserName,
    newListName,
    changeNameHandler,
    changeNameButtonHandler,
    changeListNameHandler,
    changeListNameButtonHandler,
    closeConfigHandler,
    arrayTasks,
    currentDayOfWeek,
    currentMonth,
    year,
    day,
    spanishNameDayOfWeek,
    arraySpanishMonthsName,
  } = useContext(ToDoListContext);

  return (
    <>
      <div className="settings-container">
        <h1 className="settings-general-title"> Configuración </h1>

        <section className="settings-wrap">
          <div className="settings-section-container">
            <h2 className="settings-section-title"> Mi Lista </h2>
            <hr className="line-settings" />

            <form className="user-and-list-names-wrap">
              <label className="info-txt"> Nombre de usuario </label>
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

              <label className="info-txt"> Nombre de lista </label>
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

          <section className="settings-section-container">
            <h2 className="settings-section-title"> Estadísticas </h2>
            <hr className="line-settings" />

            <div className="tasks-stadistics-wrap">
              <p className="info">
                {" "}
                <strong> Tareas creadas: {arrayTasks.length}</strong>{" "}
              </p>
              <p>
                Desde el {spanishNameDayOfWeek[currentDayOfWeek]} {day} de {""}
                {arraySpanishMonthsName[currentMonth]} del {year}
              </p>
            </div>
          </section>

          <button className="button-back-home" onClick={closeConfigHandler}>
            Volver a la app
          </button>
          <section className="personal-info">
            <h5> © Diego Martínez - 2023 </h5>
            <p>Frontend Developer - Graphic Designer</p>
          </section>
        </section>
      </div>
    </>
  );
};
