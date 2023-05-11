import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./addTaskButton.css";

const AddTaskButton = () => {
  return (
    <button className="add-task-container">
      <FontAwesomeIcon icon={faPlusCircle} className="add-task" />
    </button>
  );
};

export default AddTaskButton;
