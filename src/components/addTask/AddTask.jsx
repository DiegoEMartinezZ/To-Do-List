import React from "react";
import "./addTask.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AddTaskButtonText from "../../resources/buttons/add-task-button-text/AddTaskButtonText";

const AddTask = () => {
  return (
    <section className="add-task-container">
      <form action="submit" className="form-add-task">
        <h1 className="title-add-task-container">
          <FontAwesomeIcon icon={faStar} className="favorite-icon" /> Nueva
          Tarea{" "}
        </h1>
        <input type="text" placeholder="Tipo de tarea" />
        <input type="text" placeholder="Hora" />
        <input type="text" placeholder="Lugar" />
        <AddTaskButtonText />
      </form>
    </section>
  );
};

export default AddTask;
