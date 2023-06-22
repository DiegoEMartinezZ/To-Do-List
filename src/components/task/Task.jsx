import React, { useContext } from "react";
import AddTaskButton from "../../resources/buttons/add-task-button/AddTaskButton";
import { AddTaskContext } from "../../resources/addTaskContext/AddTaskContext";
import "./task.css";

export const Task = () => {
  /*
  
  Aca pondremos la condicion de que si no hay algo en el array el display
  es none en cuanto al all-task-container
  
  */

  const { arrayTasks } = useContext(AddTaskContext);
  return (
    <>
      <section className="all-tasks-container">
        <AddTaskButton />
        <section className="task-container">
          <ul className="task-wrap">
            {arrayTasks.map((oneTask, idx) => (
              <li key={idx} className="one-task-container">
                <p>{idx + 1}</p>
                <h1 className="title-task">{oneTask.title}</h1>
                <h3 className="time-task"> {oneTask.time} </h3>
                <h3 className="place-task"> {oneTask.place} </h3>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};
