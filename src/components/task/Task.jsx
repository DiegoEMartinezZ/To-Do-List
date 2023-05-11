import React from "react";
import AddTaskButton from "../../resources/buttons/add-task-button/AddTaskButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./task.css";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

export const Task = () => {
  let arrayTasksDay = [];

  return (
    <>
      <section className="task-container">
        {arrayTasksDay.length === 0 ? (
          <h2 className="no-task-wrap">
            {" "}
            No tienes Tareas <FontAwesomeIcon icon={faFaceSadTear} />{" "}
          </h2>
        ) : (
          <h2> {arrayTasksDay} </h2>
        )}
        <AddTaskButton />
      </section>
    </>
  );
};
