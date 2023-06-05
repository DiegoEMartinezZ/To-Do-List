import React from "react";
import AddTaskButton from "../../resources/buttons/add-task-button/AddTaskButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./task.css";
import { faFaceSadTear, faHeart } from "@fortawesome/free-solid-svg-icons";

export const Task = () => {
  /*
 Esta parte se hace con MAP para que recorra el array dependiendo de 
la longitud del array de tareas
  */
  const arrayTasksDay = [
    {
      title: "Gimnasio",
      time: "9:00 am",
      location: "Stark Av 7ma",
    },
    {
      title: "Almuerzo",
      time: "1:30 pm",
      location: "Crepes & Waffles",
    },
  ];

  return (
    <>
      <section className="all-tasks-container">
        {arrayTasksDay.length === 0 ? (
          <h2 className="no-task-container">
            No tienes Tareas <FontAwesomeIcon icon={faFaceSadTear} />{" "}
          </h2>
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
              <h3 className="time-task"> {arrayTasksDay[0].time} </h3>
              <h4 className="location-task"> {arrayTasksDay[0].location}</h4>
            </div>
            <FontAwesomeIcon
              icon={faHeart}
              className="favorite-task"
            ></FontAwesomeIcon>
          </section>
        )}

        <AddTaskButton />
      </section>
    </>
  );
};
