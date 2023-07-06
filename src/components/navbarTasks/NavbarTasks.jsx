import React from "react";
import { InfoToDoList } from "../../resources/infoToDoList/InfoToDoList";
import { Calendar } from "../calendar/Calendar";
import "./navBarTasks.css";

export const NavbarTasks = () => {
  return (
    <>
      <ul className="navbar-tasks-container">
        <li className="navbar-tasks-options">Todas</li>
        <hr />
        <li className="navbar-tasks-options">Finalizadas</li>
        <hr />
        <li className="navbar-tasks-options"> Pendientes </li>
      </ul>
      <Calendar />
      <InfoToDoList />
    </>
  );
};
