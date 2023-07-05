import React, { useContext } from "react";
import { ToDoListContext } from "../../resources/toDoListContext/ToDoListContext";

import {
  IconChevronUp,
  IconPencil,
  IconMapPin,
  IconSquarePlus,
} from "@tabler/icons-react";
import "./addTask.css";

const AddTask = () => {
  const {
    closeTaskWindow,
    addTaskHandler,
    submitTaskHandler,
    arrayTasks,
    ...newTask
  } = useContext(ToDoListContext);

  return (
    <section className="add-task-container">
      <form
        action="submit"
        className="form-add-task"
        onSubmit={submitTaskHandler}
      >
        <IconChevronUp className="close-add-window" onClick={closeTaskWindow} />
        <h1 className="title-add-task-container">
          <IconSquarePlus className="icon-plus" /> Nueva Tarea
        </h1>

        <section className="form-sections-container">
          <IconPencil />
          <input
            name="title"
            type="text"
            value={newTask.name}
            onChange={(e) => {
              addTaskHandler(e);
            }}
          />
        </section>

        <section className="form-sections-container">
          <IconMapPin />
          <input
            name="place"
            type="text"
            value={newTask.name}
            onChange={(e) => {
              addTaskHandler(e);
            }}
          ></input>
        </section>

        <button type="submit" className="send-task">
          Añadir Tarea
        </button>
      </form>
    </section>
  );
};

export default AddTask;
