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

  const [arrayTasks, setArrayTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTaskButtonHandler = (e) => {
    e.preventDefault();
    setNewTask("");
  };

  // Math.floor(Math.random() * 1000);

  const changeNewTaskHandler = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
      createdTime: currentTime,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask("");
    if (newTask !== "") {
      setArrayTasks([...arrayTasks, newTask]);
      setNewTask("");
    }
    const addTaskWindow = document.querySelector(".add-task-container");
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskWindow.classList.toggle("active");
    addTaskButton.classList.toggle("inactive");
  };

  const deleteHandler = (taskIndex) => {
    const removeTask = arrayTasks.filter((_, idx) => idx !== taskIndex);
    setArrayTasks(removeTask);
    console.log(removeTask);
  };

  return (
    <AddTaskContext.Provider
      value={{
        closeTaskWindowHandler,
        addTaskButtonHandler,
        changeNewTaskHandler,
        submitHandler,
        deleteHandler,
        setNewTask,
        arrayTasks,
        setArrayTasks,
      }}
    >
      {children}
    </AddTaskContext.Provider>
  );
};
