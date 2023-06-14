import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./addTaskButton.css";

const AddTaskButton = () => {
  const addTaskhandler = () => {
    const addTaskWindow = document.querySelector(".add-task-container");
    addTaskWindow.classList.toggle("active");
  };

  return (
    <button className="add-task-container">
      <FontAwesomeIcon
        icon={faPlusCircle}
        className="add-task"
        onClick={addTaskhandler}
      />
    </button>
  );
};

export default AddTaskButton;
