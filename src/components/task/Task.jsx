import React from "react";
import AddTaskButton from "../../resources/buttons/add-task-button/AddTaskButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./task.css";

export const Task = () => {
  /*
 Esta parte se hace con MAP para que recorra el array dependiendo de 
la longitud del array de tareas
  */
  const arrayTasksDay = [];

  return (
    <>
      <section className="all-tasks-container">
        {arrayTasksDay.length === 0 ? (
          <AddTaskButton />
        ) : (
          <section className="task-container">
            <input
              type="checkbox"
              name="check"
              value="check"
              className="checkbox-task"
            />
            <div className="info-tasks">
              <h2 className="title-task">{arrayTasksDay[0].title} </h2>
              <h4 className="description-task">
                {arrayTasksDay[0].description}
              </h4>
            </div>
            <FontAwesomeIcon
              icon={faHeart}
              className="favorite-task"
            ></FontAwesomeIcon>
          </section>
        )}
      </section>
    </>
  );
};
