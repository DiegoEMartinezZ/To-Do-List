import React from "react";
import { NavBar } from "../../components/navbar/NavBar";
import { Calendar } from "../../components/calendar/Calendar";
import { InfoToDoList } from "../../resources/infoToDoList/InfoToDoList";
import { TaskOfDay } from "../../resources/taskOfToday/TaskOfDay";
import { NavbarTasks } from "../../components/navbarTasks/NavbarTasks";
import { Task } from "../../components/task/Task";
import AddTask from "../../components/addTask/AddTask";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <NavbarTasks />
      <Calendar />
      <InfoToDoList />
      <TaskOfDay />
      <AddTask />
      <Task />
    </div>
  );
};
