import React from "react";
import "./addTaskButtonText.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const handlerButton = (e) => {
  e.preventDefault();
};

const AddTaskButtonText = () => {
  return (
    <button className="add-task-text-container" onClick={handlerButton}>
      <h1 className="add-task-text">
        <FontAwesomeIcon icon={faAdd} /> Añadir
      </h1>
    </button>
  );
};

export default AddTaskButtonText;
