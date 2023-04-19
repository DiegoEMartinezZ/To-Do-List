import React from "react";
import { NavBar } from "../../components/navbar/NavBar";
import { Calendar } from "../../components/calendar/Calendar";
import { TaskOfDay } from "../../resources/taskOfToday/TaskOfDay";
import { NavbarTasks } from "../../components/navbarTasks/NavbarTasks";
import { Task } from "../../components/task/Task";
import { TitleToDoList } from "../../resources/titleToDoList/TitleToDoList";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Calendar />
      <TitleToDoList />
      <TaskOfDay />
      <NavbarTasks />
      <Task />
    </div>
  );
};
