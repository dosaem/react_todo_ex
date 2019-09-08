import React, { Component } from "react";
import axios from "axios";

class List extends Component {
  state = {
    title: "",
    description: "",
    status: "todo" // ["todo", "doing", "done"]
  };

  handleTitle = event => {
    this.setState({ title: event.currentTarget.value });
  };

  handleDescription = event => {
    this.setState({ description: event.currentTarget.value });
    // console.log()
  };

  handleSelect = event => {
    this.setState({ status: event.currentTarget.value });
  };
  handleAddClick = () => {
    // const { todos } = this.state;
    // this.setState({
    //   todos: todos.concat(this.state.title)
    // });
    // console.log(todos);

    axios.post("https://dh-todo-api.herokuapp.com/tasks", this.state, {
      withCredentials: true
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitle}
          />
          <textarea
            onChange={this.handleDescription}
            value={this.state.description}
          />
          <select
            name="status"
            onChange={this.handleSelect}
            value={this.state.status}
          >
            <option value="todo">todo</option>
            <option value="doing">doing</option>
            <option value="done">done</option>
          </select>
          <button type="button" onClick={this.handleAddClick}>
            추가
          </button>
        </div>
        {todos && todos.map(todos => <TodoList todos={todos} />)}
      </div>
    );
  }
}

function TodoList({ todos }) {
  return <div>{todos}</div>;
}

export default List;
