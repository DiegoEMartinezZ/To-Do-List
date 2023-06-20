import React, { useContext } from "react";
import { AddTaskContext } from "../../resources/addTaskContext/AddTaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  IconPlus,
  IconChevronUp,
  IconClock,
  IconPencil,
  IconMapPin,
} from "@tabler/icons-react";
import "./addTask.css";

const AddTask = () => {
  const {
    closeTaskWindowHandler,
    sendTaskButtonHandler,
    changeNewTaskHandler,
  } = useContext(AddTaskContext);

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
        <section className="form-sections-container">
          <IconMapPin />
          <input
            name="place"
            type="text"
            placeholder="Lugar"
            onChange={changeNewTaskHandler}
          />
        </section>
        <section className="form-sections-container">
          <IconClock />
          <input
            name="time"
            type="time"
            placeholder="Hora"
            onChange={changeNewTaskHandler}
          />
        </section>
        <section className="form-sections-container">
          <IconPencil />
          <input
            name="description"
            id="description-text"
            placeholder="Descripción"
            onChange={changeNewTaskHandler}
          ></input>
        </section>
        <button
          type="submit"
          className="send-task"
          onClick={sendTaskButtonHandler}
        >
          <IconPlus />
        </button>
      </form>
    </section>
  );
};

export default AddTask;
