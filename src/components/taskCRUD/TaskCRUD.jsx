import React, { useContext } from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { AddTaskContext } from "../../resources/addTaskContext/AddTaskContext";

export const TaskCRUD = ({ idx }) => {
  const { deleteHandler } = useContext(AddTaskContext);

  const editHandler = () => {
    console.log("oprimiste el boton de editar");
  };

  return (
    <section className="buttons-crud-container">
      <button className="edit-task-button" onClick={editHandler}>
        <IconEdit />
      </button>

      <hr />

      <button
        className="delete-task-button"
        onClick={() => {
          deleteHandler(idx);
        }}
      >
        <IconTrash />
      </button>
    </section>
  );
};
