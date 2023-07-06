import React, { useContext } from "react";
import { ToDoListContext } from "../toDoListContext/ToDoListContext";
import "./infoToDoList.css";

export const InfoToDoList = () => {
  const { arrayTasks, displayListName } = useContext(ToDoListContext);
  return (
    <>
      <div className="title-container">
        <h1 className="to-do-List-title"> {displayListName} </h1>
      </div>
      <div className="task-today-container">
        <h3 className="task-today-title">Tienes {arrayTasks.length} tareas</h3>
      </div>
    </>
  );
};
