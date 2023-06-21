import React, { useContext } from "react";
import AddTaskButton from "../../resources/buttons/add-task-button/AddTaskButton";
import { AddTaskContext } from "../../resources/addTaskContext/AddTaskContext";
import "./task.css";

export const Task = () => {
  const { arrayTasks } = useContext(AddTaskContext);
  console.log(arrayTasks);
  return (
    <>
      <section className="all-tasks-container">
        {arrayTasks.length === 0 ? (
          <AddTaskButton />
        ) : (
          <section className="task-container">
            <ul className="task-container">
              {arrayTasks.map((oneTask, idx) => (
                <li key={idx} className="one-task-container">
                  <h1>{oneTask.place}</h1>
                  <h3> {oneTask.time} </h3>
                  <p> {oneTask.description} </p>
                </li>
              ))}
            </ul>
            <AddTaskButton />
          </section>
        )}
      </section>
    </>
  );
};
