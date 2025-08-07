import React, { Component } from "react";
import "./Main.css";
import Form from "./Form"; // Importing the Form component
import Tasks from "./Tasks"; // Importing the Tasks component


export default class Main extends Component {
  state = {
    newtask: "",
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return;

    this.setState({tasks});
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if (tasks === prevState.tasks) return;

    localStorage.setItem("tasks", JSON.stringify(tasks));

  }

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
        <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        newtask={newtask}
        />
        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
