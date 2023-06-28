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
  const {
    closeTaskWindowHandler,
    changeNewTaskHandler,
    submitHandler,
    ...newTask
  } = useContext(AddTaskContext);

  return (
    <section className="add-task-container">
      <form action="submit" className="form-add-task" onSubmit={submitHandler}>
        <IconChevronUp
          className="close-add-window"
          onClick={closeTaskWindowHandler}
        />
        <h1 className="title-add-task-container">
          <IconSquarePlus className="icon-plus" /> Nueva Tarea
        </h1>

        <section className="form-sections-container">
          <IconPencil />
          <input
            name="title"
            type="text"
            value={newTask.name}
            placeholder="Titulo"
            onChange={changeNewTaskHandler}
          />
        </section>

        <section className="form-sections-container">
          <IconMapPin />
          <input
            name="place"
            type="text"
            value={newTask.name}
            placeholder="Lugar"
            onChange={changeNewTaskHandler}
          ></input>
        </section>

        <button type="submit" className="send-task">
          <IconPlus />
        </button>
      </form>
    </section>
  );
};

export default AddTask;
