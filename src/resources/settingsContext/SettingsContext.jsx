import React from "react";
import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const closeConfigHandler = () => {
    const closeSettingsWindow = document.querySelector(".settings-container");
    const settingsButton = document.querySelector(".config-button");
    const validInfo = document.querySelector(".valid-info");
    const validInfo02 = document.querySelector(".valid-info-02");
    settingsButton.classList.toggle("faTimes");
    closeSettingsWindow.classList.toggle("active");
    validInfo.classList.remove("active");
    validInfo02.classList.remove("active");
    setNewUserName("");
    setNewListName("");
  };

  /* 
      Edit the user and the list names
       */
  // Edit user name
  const [newUserName, setNewUserName] = useState("Usuario");
  const [displayName, setDisplayName] = useState("Usuario");

  const changeNameHandler = (e) => {
    setNewUserName(e.target.value);
    const validInfo = document.querySelector(".valid-info");
    validInfo.classList.remove("active");
  };

  const changeNameButtonHandler = (e) => {
    e.preventDefault();
    setDisplayName(`${newUserName}`);
    const validInfo = document.querySelector(".valid-info");
    validInfo.classList.toggle("active");
  };

  // Edit list name
  const [newListName, setNewListName] = useState("To-Do-List");
  const [displayListName, setDisplayListName] = useState("To-Do-List");

  const changeListNameHandler = (e) => {
    setNewListName(e.target.value);
    const validInfo02 = document.querySelector(".valid-info-02");
    validInfo02.classList.remove("active");
  };

  const changeListNameButtonHandler = (e) => {
    e.preventDefault();
    setDisplayListName(`${newListName}`);
    const validInfo = document.querySelector(".valid-info-02");
    validInfo.classList.toggle("active");
  };
  return (
    <SettingsContext.Provider
      value={{
        changeNameHandler,
        changeNameButtonHandler,
        changeListNameHandler,
        changeListNameButtonHandler,
        displayName,
        displayListName,
        closeConfigHandler,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
