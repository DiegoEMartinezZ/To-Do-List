import React from "react";
import moment from "moment";
import { createContext, useEffect, useState } from "react";

export const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const date = moment();
  ////////////////
  const day = date.date();
  const hours = date.hours();
  const dayOfWeek = date.weekday();
  const dayName = date.format("dddd");
  const month = date.format("MMMM");
  const monthNumber = date.month();
  const daysInMonth = date.daysInMonth();
  const year = date.format("YYYY");

  /////*  Current local real-time */

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  console.log(currentTime);

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

  //////* Welcome depending of the time of the day*/

  const greetings = {
    morning: "Buenos días",
    afternoon: "Buenas tardes",
    night: "Buenas noches",
  };

  const welcome = (hours) => {
    if (hours < 12) {
      return greetings.morning;
    }
    if (hours > 13 && hours <= 19) {
      return greetings.afternoon;
    }
    if (hours > 19) {
      return greetings.night;
    }
  };

  /////* Buttons to move the days of the calendar */

  const [currentDay, setCurrentDay] = useState(day);

  const nextDay = () => {
    setCurrentDay(currentDay + 1);
    if (currentDay === daysInMonth) {
      setCurrentDay(1);
    }
  };
  const previousDay = () => {
    setCurrentDay(currentDay - 1);
    if (currentDay <= 1) {
      setCurrentDay(daysInMonth);
    }
  };

  const endMonth = (currentDay, daysInMonth) => {
    if (currentDay === 1 && daysInMonth % 2 === 0) {
      return daysInMonth + 1;
    }
    {
      if (currentDay === 1 && daysInMonth % 2 !== 0) {
        return daysInMonth - 1;
      }
    }
    return currentDay - 1;
  };

  return (
    <CalendarContext.Provider
      value={{
        currentTime,
        currentDay,
        year,
        month,
        monthNumber,
        daysInMonth,
        dayName,
        dayOfWeek,
        endMonth,
        nextDay,
        previousDay,
        welcome,
        hours,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
