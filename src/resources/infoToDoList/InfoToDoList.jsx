import React from "react";
import { useContext } from "react";
import { SettingsContext } from "../settingsContext/SettingsContext";
import "./infoToDoList.css";

export const InfoToDoList = () => {
  const { displayListName } = useContext(SettingsContext);
  return (
    <>
      <div className="title-container">
        <h1 className="to-do-List-title"> {displayListName} </h1>
      </div>
      <div className="task-today-container">
        <h3 className="task-today-title"> Tienes 0 tareas hoy </h3>
      </div>
    </>
  );
};
