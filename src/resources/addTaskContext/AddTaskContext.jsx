import React, { createContext, useState } from "react";

export const AddTaskContext = createContext();

export const AddTaskProvider = ({ children }) => {
  const closeTaskWindowHandler = () => {
    const addTaskWindow = document.querySelector(".add-task-container");
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskWindow.classList.toggle("active");
    addTaskButton.classList.toggle("inactive");
  };

  const [newTask, setNewTask] = useState({
    place: "Sin Lugar",
    time: "Sin Tiempo",
    description: "Sin Descripción",
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
