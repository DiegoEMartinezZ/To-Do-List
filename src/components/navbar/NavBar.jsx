import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faGlobe,
  faHome,
  faMoon,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { SettingsPage } from "../settingsPage/SettingsPage";
import { CalendarContext } from "../../resources/calendarContext/CalendarContext";
import { useContext } from "react";
import "./navbar.css";
import { LanguageConfig } from "../languageConfig/LanguageConfig";

export const NavBar = () => {
  const { currentMonth, year, currentTime, welcome, hours } =
    useContext(CalendarContext);

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
    const closeSettingsButton = document.querySelector(".close-button");
    settingsWindow.classList.toggle("active");
    settingsButton.classList.toggle("inactive");
    closeSettingsButton.classList.toggle("active");
  };

  const languageConfig = () => {
    const languageWindow = document.querySelector(".language-list");
    const languageButton = document.querySelector(".language-button");
    const closeSettingsButton = document.querySelector(".close-button");
    languageWindow.classList.toggle("active");
    languageButton.classList.toggle("inactive");
    closeSettingsButton.classList.toggle("active");
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
          <section className="buttons-edit">
            <FontAwesomeIcon icon={faMoon} className="dark-mode-button" />
            <FontAwesomeIcon
              icon={faGear}
              className="config-button"
              onClick={configHandler}
            />
            <FontAwesomeIcon
              icon={faXmark}
              className="close-button"
              onClick={configHandler}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faGlobe}
              className="language-button"
              onClick={languageConfig}
            />
          </section>
        </nav>
        <section className="navbar-content">
          <h3 className="navbar-welcome-text"> {welcome(hours)}, usuario</h3>
          <h1 className="navbar-time"> {currentTime} </h1>
          <h2 className="navbar-date-year">
            {finalMonth} - {year}
          </h2>
        </section>
      </header>
    </>
  );
};
