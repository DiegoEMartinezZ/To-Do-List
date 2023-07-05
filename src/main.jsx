import React from "react";
import ReactDOM from "react-dom/client";
import { ToDoListProvider } from "./resources/toDoListContext/ToDoListContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoListProvider>
      <App />
    </ToDoListProvider>
  </React.StrictMode>
);
