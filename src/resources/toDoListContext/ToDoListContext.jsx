import React from "react";
import { createContext, useState, useEffect } from "react";
import moment from "moment";

export const ToDoListContext = createContext();

export const ToDoListProvider = ({ children }) => {
  /*


   Settings


  */
  const closeConfigHandler = () => {
    const closeSettingsWindow = document.querySelector(".settings-container");
    const settingsButton = document.querySelector(".config-button");
    const validInfo = document.querySelector(".valid-info");
    const validInfo02 = document.querySelector(".valid-info-02");
    settingsButton.classList.toggle("faTimes");
    closeSettingsWindow.classList.toggle("active");
    validInfo.classList.remove("active");
    validInfo02.classList.remove("active");
  };

  // Edit user name
  const [newUserName, setNewUserName] = useState("Usuario");
  const [displayName, setDisplayName] = useState("Usuario");

  const changeNameHandler = (e) => {
    setNewUserName(e.target.value);
    const validInfo = document.querySelector(".valid-info");
    validInfo.classList.remove("active");
  };

  const changeNameButtonHandler = (e) => {
    e.preventDefault();
    setDisplayName(`${newUserName}`);
    const validInfo = document.querySelector(".valid-info");
    validInfo.classList.toggle("active");
  };

  // Edit list name
  const [newListName, setNewListName] = useState("To-Do-List");
  const [displayListName, setDisplayListName] = useState("To-Do-List");

  const changeListNameHandler = (e) => {
    setNewListName(e.target.value);
    const validInfo02 = document.querySelector(".valid-info-02");
    validInfo02.classList.remove("active");
  };

  const changeListNameButtonHandler = (e) => {
    e.preventDefault();
    setDisplayListName(`${newListName}`);
    const validInfo = document.querySelector(".valid-info-02");
    validInfo.classList.toggle("active");
  };
  /*


   Calendar 
   

  */
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

  /* 


  Tasks


  */
  const closeTaskWindow = () => {
    const addTaskWindow = document.querySelector(".add-task-container");
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskWindow.classList.toggle("active");
    addTaskButton.classList.toggle("inactive");
  };

  const [arrayTasks, setArrayTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [updateTask, setUpdateTask] = useState("");

  // Add Task

  const addTaskHandler = (e) => {
    const newEntry = {
      ...newTask,
      [e.target.name]: e.target.value,
      createdTime: currentTime,
    };
    setNewTask(newEntry);
  };

  // Submit Task

  const submitTaskHandler = (e) => {
    e.preventDefault();
    if (newTask !== "") {
      setArrayTasks([...arrayTasks, newTask]);
      setNewTask("");
    }
    const addTaskWindow = document.querySelector(".add-task-container");
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskWindow.classList.toggle("active");
    addTaskButton.classList.toggle("inactive");
  };

  // Change task for update

  // Update Task

  const updateHandler = (taskIndex, newText) => {
    const updateTask = arrayTasks.map((oneTask) => {
      if (oneTask.idx === taskIndex) {
        return { ...arrayTasks, name: newText };
      }
      return oneTask;
    });
    setArrayTasks(updateTask);
    console.log(updateTask);
  };

  // Delete Task

  const deleteHandler = (taskIndex) => {
    const removeTask = arrayTasks.filter((_, idx) => idx !== taskIndex);
    setArrayTasks(removeTask);
    console.log(removeTask);
  };
  return (
    <ToDoListContext.Provider
      value={{
        changeNameHandler,
        changeNameButtonHandler,
        changeListNameHandler,
        changeListNameButtonHandler,
        displayName,
        displayListName,
        closeConfigHandler,
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
        addTaskHandler,
        submitTaskHandler,
        deleteHandler,
        closeTaskWindow,
        updateHandler,
        arrayTasks,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};
