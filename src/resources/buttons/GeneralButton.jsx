import React from "react";
import { Link } from "react-router-dom";
import "./generalButton.css";

export const GeneralButton = ({ titleButton, page }) => {
  return (
    <>
      <section className="general-button-container">
        <Link to={page}>
          <button className="general-button"> {titleButton} </button>
        </Link>
      </section>
    </>
  );
};
