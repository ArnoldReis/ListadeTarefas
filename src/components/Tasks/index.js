import React from "react";
import "./Tasks.css";
import Proptypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <span className="actions">
            <FaEdit
              onClick={(e) => handleEdit(e, index)}
              className="edit"
            ></FaEdit>
            <FaTrash
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            ></FaTrash>
          </span>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: Proptypes.array.isRequired,
  handleEdit: Proptypes.func.isRequired,
  handleDelete: Proptypes.func.isRequired,
};

