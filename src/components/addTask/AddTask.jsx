import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./addTask.css";
import { IconPlus } from "@tabler/icons-react";

const AddTask = () => {
  return (
    <section className="add-task-container">
      <form action="submit" className="form-add-task">
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
      </form>
      <button type="submit" className="send-task">
        <IconPlus />
        Añadir
      </button>
    </section>
  );
};

export default AddTask;
