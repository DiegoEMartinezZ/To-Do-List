import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./addTaskButton.css";

const AddTaskButton = () => {
  const addTaskhandler = () => {
    const addTaskWindow = document.querySelector(".add-task-container");
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskWindow.classList.toggle("active");
    addTaskButton.classList.toggle("inactive");
  };

  return (
    <button className="add-task-button">
      <FontAwesomeIcon
        icon={faPlusCircle}
        className="add-task"
        onClick={addTaskhandler}
      />
    </button>
  );
};

export default AddTaskButton;
