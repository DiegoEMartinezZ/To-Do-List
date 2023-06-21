import React from "react";
import { useContext } from "react";
import { SettingsContext } from "../settingsContext/SettingsContext";
import "./infoToDoList.css";
import { AddTaskContext } from "../addTaskContext/AddTaskContext";

export const InfoToDoList = () => {
  const { arrayTasks } = useContext(AddTaskContext);
  const { displayListName } = useContext(SettingsContext);
  return (
    <>
      <div className="title-container">
        <h1 className="to-do-List-title"> {displayListName} </h1>
      </div>
      <div className="task-today-container">
        <h3 className="task-today-title">
          Tienes {arrayTasks.length} tareas hoy
        </h3>
      </div>
    </>
  );
};
