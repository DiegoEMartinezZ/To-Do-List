import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CalendarProvider } from "./resources/calendarContext/CalendarContext";
import { SettingsProvider } from "./resources/settingsContext/SettingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalendarProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </CalendarProvider>
  </React.StrictMode>
);
