import React, { useContext } from "react";
import { ToDoListContext } from "../../resources/toDoListContext/ToDoListContext";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export const TaskCRUD = ({ id, title, place }) => {
  const { deleteHandler, taskToUpdateHandler } = useContext(ToDoListContext);

  return (
    <section className="buttons-crud-container">
      <button
        className="edit-task-button"
        onClick={() => {
          taskToUpdateHandler(place, title);
        }}
      >
        <IconEdit />
      </button>

      <hr />

      <button
        className="delete-task-button"
        onClick={() => {
          deleteHandler(id);
        }}
      >
        <IconTrash />
      </button>
    </section>
  );
};
