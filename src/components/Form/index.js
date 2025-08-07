import React from "react";
import Proptypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import "./Form.css";


export default function Form({ handleChange, handleSubmit, newtask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Digite uma tarefa"
        value={newtask}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}


Form.propTypes = {
  handleChange: Proptypes.func.isRequired,
  handleSubmit: Proptypes.func.isRequired,
  newtask: Proptypes.string.isRequired,
};
