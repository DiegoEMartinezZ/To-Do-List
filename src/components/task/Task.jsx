import React, { useContext } from "react";
import AddTaskButton from "../../resources/buttons/add-task-button/AddTaskButton";
import { AddTaskContext } from "../../resources/addTaskContext/AddTaskContext";
import { IconCheck, IconMapPin, IconPencil } from "@tabler/icons-react";
import "./task.css";
import { TaskCRUD } from "../taskCRUD/TaskCRUD";

export const Task = () => {
  /*
  
  Aca pondremos la condicion de que si no hay algo en el array el display
  es none en cuanto al all-task-container
  
  */
  const { arrayTasks } = useContext(AddTaskContext);

  /*
 
 Hora en la que se creo la tarea

 */

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
                    <em>La tarea fue creada a las {oneTask.createdTime}</em>
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
