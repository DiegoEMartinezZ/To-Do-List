import React, { useContext } from "react";
import { ToDoListContext } from "../../resources/toDoListContext/ToDoListContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SettingsPage } from "../settingsPage/SettingsPage";
import { LanguageConfig } from "../languageConfig/LanguageConfig";
import {
  faBook,
  faEdit,
  faHome,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

export const NavBar = () => {
  const { currentMonth, year, currentTime, welcome, hours, displayName } =
    useContext(ToDoListContext);

  const arraySpanishMonthsName = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const finalMonth = arraySpanishMonthsName[currentMonth];

  const configHandler = () => {
    const settingsWindow = document.querySelector(".settings-container");
    const settingsButton = document.querySelector(".config-button");
    settingsWindow.classList.toggle("active");
    settingsButton.classList.toggle("faTimes");
  };

  const languageHandler = () => {
    const languageWindow = document.querySelector(".language-list");
    const languageButton = document.querySelector(".language-button");
    languageWindow.classList.toggle("active");
    languageButton.classList.toggle("faTimes");
  };

  const lightModeHandler = () => {
    const lightModeButton = document.querySelector(".light-mode-button");
    lightModeButton.classList.toggle("faTimes");
  };

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
    </>
  );
};
