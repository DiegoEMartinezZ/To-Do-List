import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faGlobe, faHome } from "@fortawesome/free-solid-svg-icons";
import { SettingsPage } from "../settingsPage/SettingsPage";
import { CalendarContext } from "../../resources/calendarContext/CalendarContext";
import { useContext } from "react";
import "./navbar.css";

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
    settingsWindow.classList.toggle("active");
  };

  return (
    <>
      <SettingsPage />
      <header className="navbar-container">
        <nav className="navbar-buttons-container">
          <Link to={"/"} id="link">
            <FontAwesomeIcon icon={faHome} className="back-button" />
          </Link>
          <section className="buttons-edit">
            <FontAwesomeIcon
              icon={faGear}
              className="config-button"
              onClick={configHandler}
            />
            <FontAwesomeIcon icon={faGlobe} className="config-button" />
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
