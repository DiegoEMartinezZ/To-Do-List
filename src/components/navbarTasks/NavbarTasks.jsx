import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { InfoToDoList } from "../../resources/infoToDoList/InfoToDoList";
import { Calendar } from "../calendar/Calendar";
import "./navBarTasks.css";

export const NavbarTasks = () => {
  return (
    <>
      <ul className="navbar-tasks-container">
        <li className="navbar-tasks-options"> Todas </li>
        <hr />
        <li className="navbar-tasks-options">Finalizadas</li>
        <hr />
        <li className="navbar-tasks-options"> Pendientes </li>
        <hr />
        <li className="star-tasks-calendar-days">
          <FontAwesomeIcon icon={faStar} className="star" />
        </li>
      </ul>
      <Calendar />
      <InfoToDoList />
    </>
  );
};
