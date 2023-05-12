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
  const { currentDay, currentDayOfWeek, daysInMonth, nextDay, previousDay } =
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
    <ul className="calendar-days-container">
      <button className="arrow-calendar-left" onClick={previousDay}>
        <FontAwesomeIcon icon={faCircleChevronLeft} className="arrow-left" />
      </button>

      <li id="day-wrap">
        {currentDayOfWeek === 0 ? (
          <h3> {spanishNameDayOfWeek[6]} </h3>
        ) : (
          <h3> {spanishNameDayOfWeek[currentDayOfWeek - 1]} </h3>
        )}
        {currentDay === 1 ? (
          <h4 className="number-calendar-text"> {daysInMonth}</h4>
        ) : (
          <h4 className="number-calendar-text">{currentDay - 1}</h4>
        )}
      </li>

      <main className="current-day-container">
        <h3 className="current-day-name">
          {spanishNameDayOfWeek[currentDayOfWeek]}
        </h3>
        <h4 className="number-calendar-text"> {currentDay} </h4>
        <hr className="line-current-day" />
      </main>

      <li id="day-wrap">
        {currentDayOfWeek === 6 ? (
          <h3> {spanishNameDayOfWeek[0]} </h3>
        ) : (
          <h3> {spanishNameDayOfWeek[currentDayOfWeek + 1]} </h3>
        )}
        {currentDay === daysInMonth ? (
          <h4 className="number-calendar-text">
            {currentDay - daysInMonth + 1}
          </h4>
        ) : (
          <h4 className="number-calendar-text"> {currentDay + 1} </h4>
        )}
      </li>

      <button className="arrow-calendar-right" onClick={nextDay}>
        <FontAwesomeIcon icon={faCircleChevronRight} className="arrow-right" />
      </button>
    </ul>
  );
};
