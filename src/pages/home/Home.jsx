import React from "react";
import { NavBar } from "../../components/navbar/NavBar";
import { Task } from "../../components/task/Task";
import AddTask from "../../components/addTask/AddTask";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <AddTask />
      <Task />
    </div>
  );
};
