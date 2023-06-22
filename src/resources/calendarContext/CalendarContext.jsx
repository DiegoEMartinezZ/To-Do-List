import React from "react";
import moment from "moment";
import { createContext, useEffect, useState } from "react";

export const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  // Constante para traer la biblioteca Moment()
  const date = moment();
  // Numero de la fecha actual
  const day = date.date();
  // Hora del dia en formato militar
  const hours = date.hours();
  // Dia de la semana 0 domingo - 6 sabado
  const dayOfWeek = date.weekday();
  // Nombre del dia INGLES
  const dayName = date.format("dddd");
  // Nombre del mes INGLES
  const month = date.format("MMMM");
  // Numero de mes 0 Enero - 11 Diciembre
  const monthNumber = date.month();
  // Dias que componen un mes 30 - 31
  const daysInMonth = date.daysInMonth();
  // Año actual
  const year = date.format("YYYY");

  /*  Current local real-time of user */

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const updateTime = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(updateTime);
    };
  }, []);

  const tick = () => {
    setCurrentTime(
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  };

  /* Welcome depending of the time of the day */

  const greetings = {
    morning: "Buenos días",
    afternoon: "Buenas tardes",
    night: "Buenas noches",
  };

  const welcome = (hours) => {
    if (hours < 12) {
      return greetings.morning;
    }
    if (hours >= 12 && hours < 19) {
      return greetings.afternoon;
    }
    if (hours >= 19) {
      return greetings.night;
    }
  };

  /* Buttons to move the days of the calendar */

  const [currentDay, setCurrentDay] = useState(day);
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState(dayOfWeek);
  const [currentMonth, setCurrentMonth] = useState(monthNumber);
  // Contar los dias de cualquier mes
  const [totalDaysOnMonth, setTotalDaysOnMonth] = useState(
    date.month(currentMonth).daysInMonth()
  );
  /* Handler for next day button => */
  const nextDay = () => {
    setCurrentDay(currentDay + 1);
    if (currentDay === totalDaysOnMonth) {
      setCurrentDay(1);
      setCurrentMonth(currentMonth + 1);
      setTotalDaysOnMonth(date.month(currentMonth + 1).daysInMonth());
    }

    if (currentDayOfWeek === 6) {
      setCurrentDayOfWeek(0);
    } else {
      setCurrentDayOfWeek(currentDayOfWeek + 1);
    }
  };

  /* Handler for previous day button <= */

  const previousDay = () => {
    setCurrentDay(currentDay - 1);
    setCurrentDayOfWeek(currentDayOfWeek - 1);
    if (currentDay <= 1) {
      setCurrentDay(totalDaysOnMonth);
      setCurrentMonth(currentMonth - 1);
    }
    if (currentDayOfWeek === 0) {
      setCurrentDayOfWeek(6);
    } else {
      setCurrentDayOfWeek(currentDayOfWeek - 1);
    }
  };

  return (
    <CalendarContext.Provider
      value={{
        currentTime,
        currentDay,
        currentDayOfWeek,
        currentMonth,
        totalDaysOnMonth,
        year,
        month,
        monthNumber,
        daysInMonth,
        dayName,
        dayOfWeek,
        nextDay,
        previousDay,
        welcome,
        hours,
        day,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
