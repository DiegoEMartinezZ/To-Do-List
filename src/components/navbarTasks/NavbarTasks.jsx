import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./navBarTasks.css";

export const NavbarTasks = () => {
  return (
    <>
      <div className="navbar-tasks-container">
        <h2 className="navbar-tasks-options"> Todas </h2>
        <hr />
        <h2 className="navbar-tasks-options"> Completas </h2>
        <hr />
        <h2 className="navbar-tasks-options"> Incompletas </h2>
        <hr />
        <div className="star-tasks-calendar-days">
          <FontAwesomeIcon icon={faStar} className="star" />
        </div>
      </div>
    </>
  );
};
