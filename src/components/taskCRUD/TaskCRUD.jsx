import React from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export const TaskCRUD = () => {
  return (
    <section className="buttons-crud-container">
      <IconEdit className="edit-task-button" />
      <IconTrash className="delete-task-button" />
    </section>
  );
};
