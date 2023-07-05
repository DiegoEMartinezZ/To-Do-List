import React, { useContext } from "react";
import { ToDoListContext } from "../../resources/toDoListContext/ToDoListContext";

import "./calendar.css";

export const Calendar = () => {
  const { currentDay, currentDayOfWeek } = useContext(ToDoListContext);

  /*  Spanish name days of the week  */
  const spanishNameDayOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sabádo",
  ];

  /* 
  English name days
  --- Not Done Yet ---
  */

  return (
    <main className="current-day-container">
      <h3 className="current-day-name">
        {spanishNameDayOfWeek[currentDayOfWeek]} {currentDay}
      </h3>
    </main>
  );
};
