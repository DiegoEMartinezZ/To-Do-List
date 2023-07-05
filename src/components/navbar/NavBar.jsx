import React, { useContext } from "react";
import { ToDoListContext } from "../../resources/toDoListContext/ToDoListContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SettingsPage } from "../settingsPage/SettingsPage";
import { LanguageConfig } from "../languageConfig/LanguageConfig";
import { NavbarTasks } from "../navbarTasks/NavbarTasks";
import {
  faBook,
  faEdit,
  faHome,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

export const NavBar = () => {
  const {
    arraySpanishMonthsName,
    currentMonth,
    year,
    currentTime,
    welcome,
    hours,
    displayName,
    configHandler,
    languageHandler,
    lightModeHandler,
  } = useContext(ToDoListContext);

  const finalMonth = arraySpanishMonthsName[currentMonth];

  return (
    <>
      <SettingsPage />
      <LanguageConfig />
      <header className="navbar-container">
        <nav className="navbar-buttons-container">
          <Link to={"/"} id="link">
            <FontAwesomeIcon icon={faHome} className="back-button" />
          </Link>
          <ul className="buttons-edit">
            <li>
              <FontAwesomeIcon
                icon={faEdit}
                className="config-button"
                onClick={configHandler}
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faBook}
                className="language-button"
                onClick={languageHandler}
              />
            </li>

            <li>
              <FontAwesomeIcon
                icon={faSun}
                className="light-mode-button"
                onClick={lightModeHandler}
              />
            </li>
          </ul>
        </nav>
        <section className="navbar-content">
          <h3 className="navbar-welcome-text">
            {welcome(hours)}, {""}
            <strong className="user-name">{displayName}</strong>
          </h3>
          <h1 className="navbar-time"> {currentTime} </h1>
          <h2 className="navbar-date-year">
            {finalMonth} - {year}
          </h2>
        </section>
      </header>
      <NavbarTasks />
    </>
  );
};
