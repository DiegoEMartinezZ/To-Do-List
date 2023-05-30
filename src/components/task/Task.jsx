import React from "react";
import AddTaskButton from "../../resources/buttons/add-task-button/AddTaskButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./task.css";
import { faFaceSadTear, faStar } from "@fortawesome/free-solid-svg-icons";

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
      <section className="task-container">
        {arrayTasksDay.length === 0 ? (
          <h2 className="no-task-wrap">
            No tienes Tareas <FontAwesomeIcon icon={faFaceSadTear} />{" "}
          </h2>
        ) : (
          <section className="tasks-container">
            <h2 className="title-task">{arrayTasksDay[0].title} </h2>
            <h3 className="time-task"> {arrayTasksDay[0].time} </h3>
            <h4 className="location-task"> {arrayTasksDay[0].location}</h4>
            <FontAwesomeIcon
              icon={faStar}
              className="favorite-task"
            ></FontAwesomeIcon>
          </section>
        )}
        <AddTaskButton />
      </section>
    </>
  );
};
