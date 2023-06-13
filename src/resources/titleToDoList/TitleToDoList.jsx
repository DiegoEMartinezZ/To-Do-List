import React from "react";
import { useContext } from "react";
import { SettingsContext } from "../settingsContext/SettingsContext";
import "./titleToDoList.css";

export const TitleToDoList = () => {
  const { displayListName } = useContext(SettingsContext);
  return (
    <>
      <div className="title-container">
        <h1 className="to-do-List-title"> {displayListName} </h1>
      </div>
    </>
  );
};
