import React, { useContext } from "react";
import { ToDoListContext } from "../../resources/toDoListContext/ToDoListContext";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export const TaskCRUD = ({ id, title, place }) => {
  const { deleteHandler } = useContext(ToDoListContext);

  return (
    <section className="buttons-crud-container">
      <button className="edit-task-button">
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
