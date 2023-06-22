import React, { createContext, useContext, useState } from "react";
import { CalendarContext } from "../calendarContext/CalendarContext";

export const AddTaskContext = createContext();

export const AddTaskProvider = ({ children }) => {
  const { currentTime } = useContext(CalendarContext);

  const closeTaskWindowHandler = () => {
    const addTaskWindow = document.querySelector(".add-task-container");
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskWindow.classList.toggle("active");
    addTaskButton.classList.toggle("inactive");
  };

  const [newTask, setNewTask] = useState({
    title: "Sin titulo",
    time: "Sin Tiempo",
    place: "Sin lugar",
    created: currentTime,
  });

  const [arrayTasks, setArrayTasks] = useState([]);

  const addTaskButtonHandler = (e) => {
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

  const changeNewTaskHandler = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AddTaskContext.Provider
      value={{
        closeTaskWindowHandler,
        addTaskButtonHandler,
        changeNewTaskHandler,
        newTask,
        setNewTask,
        arrayTasks,
        setArrayTasks,
      }}
    >
      {children}
    </AddTaskContext.Provider>
  );
};
