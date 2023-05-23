import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { CalendarContext } from "../../resources/calendarContext/CalendarContext";

import "./calendar.css";

export const Calendar = () => {
  const { currentDay, currentDayOfWeek, nextDay, previousDay } =
    useContext(CalendarContext);

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
      <button className="arrow-calendar-left" onClick={previousDay}>
        <FontAwesomeIcon icon={faCircleChevronLeft} className="arrow-left" />
      </button>
      <h3 className="current-day-name">
        {spanishNameDayOfWeek[currentDayOfWeek]} {currentDay}
      </h3>
      <button className="arrow-calendar-right" onClick={nextDay}>
        <FontAwesomeIcon icon={faCircleChevronRight} className="arrow-right" />
      </button>
    </main>
  );
};
