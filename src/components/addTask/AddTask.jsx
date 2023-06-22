import React, { useContext } from "react";
import { AddTaskContext } from "../../resources/addTaskContext/AddTaskContext";

import {
  IconPlus,
  IconChevronUp,
  IconClock,
  IconPencil,
  IconMapPin,
  IconSquarePlus,
} from "@tabler/icons-react";
import "./addTask.css";

const AddTask = () => {
  const { closeTaskWindowHandler, addTaskButtonHandler, changeNewTaskHandler } =
    useContext(AddTaskContext);

  return (
    <section className="add-task-container">
      <form action="submit" className="form-add-task">
        <IconChevronUp
          className="close-add-window"
          onClick={closeTaskWindowHandler}
        />
        <h1 className="title-add-task-container">
          {" "}
          <IconSquarePlus className="icon-plus" /> Nueva Tarea
        </h1>

        <section className="form-sections-container">
          <IconPencil />
          <input
            name="title"
            type="text"
            placeholder="Nombre Tarea"
            onChange={changeNewTaskHandler}
          />
        </section>

        <section className="form-sections-container">
          <IconClock />
          <input name="time" type="time" onChange={changeNewTaskHandler} />
        </section>
        <section className="form-sections-container">
          <IconMapPin />
          <input
            name="place"
            placeholder="Lugar"
            onChange={changeNewTaskHandler}
          ></input>
        </section>

        <button
          type="submit"
          className="send-task"
          onClick={addTaskButtonHandler}
        >
          <IconPlus />
        </button>
      </form>
    </section>
  );
};

export default AddTask;
