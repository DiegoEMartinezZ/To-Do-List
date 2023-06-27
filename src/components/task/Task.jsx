import React, { useContext } from "react";
import AddTaskButton from "../../resources/buttons/add-task-button/AddTaskButton";
import { AddTaskContext } from "../../resources/addTaskContext/AddTaskContext";
import {
  IconChevronDown,
  IconClock,
  IconMapPin,
  IconPencil,
} from "@tabler/icons-react";
import { TaskCRUD } from "../taskCRUD/TaskCRUD";
import "./task.css";

export const Task = () => {
  /*
  
  Aca pondremos la condicion de que si no hay algo en el array el display
  es none en cuanto al all-task-container
  
  */
  const { arrayTasks } = useContext(AddTaskContext);

  /*
 
 Hora en la que se creo la tarea

 */

  const taskCRUDHandler = () => {
    const taskCRUDWindow = document.querySelector(".buttons-crud-container");
    taskCRUDWindow.classList.toggle("active");
  };

  return (
    <>
      <section className="all-tasks-container">
        <AddTaskButton />
        <section className="task-container">
          <ul className="task-wrap">
            {arrayTasks.map((oneTask, idx) => {
              return (
                <li
                  key={idx}
                  id={oneTask.id}
                  className="one-task-container"
                  onClick={taskCRUDHandler}
                >
                  <h1 className="title-task">
                    <IconPencil />
                    {""}
                    {oneTask.title}
                  </h1>

                  <h3 className="time-task">
                    <IconClock />
                    {""}
                    {oneTask.time}{" "}
                  </h3>
                  <h3 className="place-task">
                    <IconMapPin />
                    {""}
                    {oneTask.place}{" "}
                  </h3>
                  <h5 className="created-time-task">
                    La tarea fue creada a las {oneTask.createdTime}
                  </h5>

                  <TaskCRUD />
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </>
  );
};
