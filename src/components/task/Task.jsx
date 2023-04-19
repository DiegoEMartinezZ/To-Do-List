import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./task.css";

export const Task = () => {
  return (
    <>
      <div className="task-container">
        <section className="task-wrap">
          <h2> No tienes Tareas :( </h2>
        </section>
        <div className="add-task-container">
          <FontAwesomeIcon icon={faPlusCircle} className="add-task" />
        </div>
      </div>
    </>
  );
};
