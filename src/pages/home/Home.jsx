import React from "react";
import { NavBar } from "../../components/navbar/NavBar";
import { Calendar } from "../../components/calendar/Calendar";
import { TitleToDoList } from "../../resources/titleToDoList/TitleToDoList";
import { TaskOfDay } from "../../resources/taskOfToday/TaskOfDay";
import { NavbarTasks } from "../../components/navbarTasks/NavbarTasks";
import { Task } from "../../components/task/Task";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <NavbarTasks />
      <TitleToDoList />
      <TaskOfDay />
      <Calendar />
      <Task />
    </div>
  );
};
