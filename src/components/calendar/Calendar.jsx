import React, { useContext } from "react";
import { ToDoListContext } from "../../resources/toDoListContext/ToDoListContext";

import "./calendar.css";

export const Calendar = () => {
  const { currentDay, currentDayOfWeek, spanishNameDayOfWeek } =
    useContext(ToDoListContext);

  return (
    <main className="current-day-container">
      <h3 className="current-day-name">
        {spanishNameDayOfWeek[currentDayOfWeek]} {currentDay}
      </h3>
    </main>
  );
};
