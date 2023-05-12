import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./navBarTasks.css";

export const NavbarTasks = () => {
  return (
    <>
      <ul className="navbar-tasks-container">
        <li className="navbar-tasks-options"> Todas </li>
        <hr />
        <li className="navbar-tasks-options"> Completadas </li>
        <hr />
        <li className="navbar-tasks-options"> Incompletas </li>
        <hr />
        <li className="star-tasks-calendar-days">
          <FontAwesomeIcon icon={faStar} className="star" />
        </li>
      </ul>
    </>
  );
};
