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
    place: "Sin lugar",
    description: "Sin Descripción",
    time: "Sin hora",
  });
  const sendTaskButtonHandler = (e) => {
    e.preventDefault();
    console.log(newTask);
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
        sendTaskButtonHandler,
        changeNewTaskHandler,
      }}
    >
      {children}
    </AddTaskContext.Provider>
  );
};
