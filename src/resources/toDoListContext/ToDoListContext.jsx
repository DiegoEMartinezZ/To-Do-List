import React from "react";
import { createContext, useState, useEffect } from "react";
import moment from "moment";

export const ToDoListContext = createContext();

export const ToDoListProvider = ({ children }) => {
  /*


   Settings


  */

  const configHandler = () => {
    const settingsWindow = document.querySelector(".settings-container");
    const settingsButton = document.querySelector(".config-button");
    const languageWindow = document.querySelector(".language-list");
    const languageButton = document.querySelector(".language-button");

    settingsWindow.classList.toggle("active");
    settingsButton.classList.toggle("faTimes");

    languageWindow.classList.remove("active");
    languageButton.classList.remove("faTimes");
    lightModeButton.classList.remove("faTimes");
  };

  const languageHandler = () => {
    const languageWindow = document.querySelector(".language-list");
    const languageButton = document.querySelector(".language-button");
    const settingsWindow = document.querySelector(".settings-container");
    const settingsButton = document.querySelector(".config-button");

    languageWindow.classList.toggle("active");
    languageButton.classList.toggle("faTimes");

    settingsWindow.classList.remove("active");
    settingsButton.classList.remove("faTimes");
    lightModeButton.classList.remove("faTimes");
  };

  const lightModeHandler = () => {
    const lightModeButton = document.querySelector(".light-mode-button");
    const languageWindow = document.querySelector(".language-list");
    const languageButton = document.querySelector(".language-button");
    const settingsWindow = document.querySelector(".settings-container");
    const settingsButton = document.querySelector(".config-button");
    lightModeButton.classList.toggle("faTimes");

    languageWindow.classList.remove("active");
    languageButton.classList.remove("faTimes");
    settingsWindow.classList.remove("active");
    settingsButton.classList.remove("faTimes");
  };

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
  const [newUserName, setNewUserName] = useState("");
  const [displayName, setDisplayName] = useState("usuario");

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
  /* Spanish name months */
  const arraySpanishMonthsName = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

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
    } else if (hours >= 12 && hours < 19) {
      return greetings.afternoon;
    } else if (hours >= 19) {
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

  const [newName, setNewName] = useState("");
  const [newPlace, setNewPlace] = useState("");
  const [editTask, setEditTask] = useState("");
  const [arrayTasks, setArrayTasks] = useState(() => {
    const localValue = localStorage.getItem("TASKS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(arrayTasks));
  }, [arrayTasks]);

  // Submit Task

  const submitTaskHandler = (e) => {
    e.preventDefault();

    if (newName !== "") {
      setArrayTasks((currentArrayTasks) => {
        return [
          ...currentArrayTasks,
          {
            id: crypto.randomUUID(),
            createdTime: currentTime,
            title: newName,
            place: newPlace,
            completed: false,
          },
        ];
      });
    }

    setNewName("");
    setNewPlace("");

    const addTaskWindow = document.querySelector(".add-task-container");
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskWindow.classList.toggle("active");
    addTaskButton.classList.toggle("inactive");
  };

  // Complete Task

  const completeTaskHandler = (id, completed) => {
    setArrayTasks((currentArrayTasks) => {
      return currentArrayTasks.map((oneTask) => {
        if (oneTask.id === id) {
          return { ...oneTask, completed };
        }
        return oneTask;
      });
    });
  };

  // Task to Update

  const taskToUpdateHandler = (id, place, title) => {
    const addTaskWindow = document.querySelector(".add-task-container");
    const addTaskButton = document.querySelector(".add-task-button");

    addTaskWindow.classList.toggle("active");
    addTaskButton.classList.toggle("inactive");

    id = newTask.id;
    setNewName(title);
    setNewPlace(place);
  };

  // Update Task
  /*
  const updateHandler = (id) => {
    setArrayTasks((currentArrayTasks) => {
      return currentArrayTasks.map((oneTask) => oneTask.id === id);
    });
    console.log(arrayTasks);
  };
  */

  // Delete Task

  const deleteHandler = (id) => {
    setArrayTasks((currentArrayTasks) => {
      return currentArrayTasks.filter((oneTask) => oneTask.id != id);
    });
  };
  return (
    <ToDoListContext.Provider
      value={{
        configHandler,
        lightModeHandler,
        languageHandler,
        changeNameHandler,
        changeNameButtonHandler,
        changeListNameHandler,
        changeListNameButtonHandler,
        displayName,
        displayListName,
        closeConfigHandler,
        arraySpanishMonthsName,
        spanishNameDayOfWeek,
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
        newName,
        newPlace,
        setNewName,
        setNewPlace,
        completeTaskHandler,
        submitTaskHandler,
        taskToUpdateHandler,
        deleteHandler,
        closeTaskWindow,
        arrayTasks,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};
