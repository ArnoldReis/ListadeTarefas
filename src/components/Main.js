import React, { Component } from "react";
import "./Main.css";

// Form

import { FaPlus } from "react-icons/fa";

// Tasks

import { FaEdit, FaTrash } from "react-icons/fa";

export default class Main extends Component {
  state = {
    newtask: "",
    tasks: [],
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newtask } = this.state;
    newtask = newtask.trim();

    if (tasks.indexOf(newtask) !== -1) return;

    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newtask],
        newtask: "",
      });
    } else {
      newTasks[index] = newtask;
      this.setState({
        tasks: [...newTasks],
        index: -1,
      });
    }
  };

  handleChange = (e) => {
    this.setState({ newtask: e.target.value });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    this.setState({
      index,
      newtask: tasks[index],
    });
  };

  handleDelete = (e, index) => {
    console.log("Delete task");
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
    });
  };

  render() {
    const { newtask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Digite uma tarefa"
            value={newtask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <span className="actions">
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                ></FaEdit>
                <FaTrash
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                ></FaTrash>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
