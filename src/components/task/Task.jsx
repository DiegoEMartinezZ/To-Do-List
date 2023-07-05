import React, { useContext } from "react";
import { ToDoListContext } from "../../resources/toDoListContext/ToDoListContext";
import AddTaskButton from "../../resources/buttons/add-task-button/AddTaskButton";
import { IconMapPin, IconPencil } from "@tabler/icons-react";
import { TaskCRUD } from "../taskCRUD/TaskCRUD";
import "./task.css";

export const Task = () => {
  const { arrayTasks } = useContext(ToDoListContext);

  return (
    <>
      <section className="all-tasks-container">
        <AddTaskButton />

        <ul className="task-wrap">
          {arrayTasks.map((oneTask, idx) => {
            return (
              <li key={idx} id={oneTask.id} className="one-task-container">
                <h1 className="title-task">
                  <IconPencil className="icon-task" />
                  {""}
                  {oneTask.title}
                </h1>
                <h3 className="place-task">
                  <IconMapPin className="icon-task" />
                  {""}
                  {oneTask.place}{" "}
                </h3>

                <div className="checkbox-task">
                  <input type="checkbox" value="true" />
                  Tarea Completa
                </div>

                <section className="created-time-buttons-container">
                  <h5 className="created-time-task">
                    <em> La tarea fue creada a las {oneTask.createdTime} </em>
                  </h5>

                  <TaskCRUD idx={idx} />
                </section>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
