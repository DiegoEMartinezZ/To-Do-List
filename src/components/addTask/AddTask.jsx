import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IconPlus, IconChevronUp } from "@tabler/icons-react";
import "./addTask.css";

const AddTask = () => {
  const closeTaskWindowHandler = () => {
    const addTaskWindow = document.querySelector(".add-task-container");
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskWindow.classList.toggle("active");
    addTaskButton.classList.toggle("inactive");
  };

  return (
    <section className="add-task-container">
      <form action="submit" className="form-add-task">
        <IconChevronUp
          className="close-add-window"
          onClick={closeTaskWindowHandler}
        />
        <h1 className="title-add-task-container">
          <FontAwesomeIcon icon={faStar} className="favorite-icon" /> Nueva
          Tarea
        </h1>
        <input type="text" placeholder="Lugar" />
        <textarea
          id="description-text"
          name="description-info"
          placeholder="Descripción"
        ></textarea>
        <input type="text" placeholder="Hora" />
        <button type="submit" className="send-task">
          <IconPlus />
          Añadir
        </button>
      </form>
    </section>
  );
};

export default AddTask;
