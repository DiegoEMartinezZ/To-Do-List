import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { SettingsPage } from "../../pages/settingsPage/SettingsPage";

export const NavBar = () => {
  return (
    <>
      <SettingsPage />
      <nav className="navbar-container">
        <div className="navbar-buttons-container">
          <Link to={"/"} id="link">
            <FontAwesomeIcon icon={faHome} className="back-button" />
          </Link>
          <FontAwesomeIcon icon={faGear} className="config-button" />
        </div>
        <section className="navbar-content">
          <h3 className="navbar-welcome-text"> Bienvenido, usuario</h3>
          <h1 className="navbar-time"> 9:00 A.M </h1>
          <h2 className="navbar-date-year">abril 2023</h2>
        </section>
      </nav>
    </>
  );
};
