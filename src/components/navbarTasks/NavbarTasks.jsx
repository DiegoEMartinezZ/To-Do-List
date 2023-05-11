import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./navBarTasks.css";

export const NavbarTasks = () => {
  return (
    <>
      <ul className="navbar-tasks-container">
        <il className="navbar-tasks-options"> Todas </il>
        <hr />
        <il className="navbar-tasks-options"> Completadas </il>
        <hr />
        <il className="navbar-tasks-options"> Incompletas </il>
        <hr />
        <il className="star-tasks-calendar-days">
          <FontAwesomeIcon icon={faStar} className="star" />
        </il>
      </ul>
    </>
  );
};
