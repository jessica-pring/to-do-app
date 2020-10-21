import React, { Component } from 'react';
import '../App.css';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Practice JavaScript',
        completed: false
      },
      {
        id: 2,
        title: 'Learn React',
        completed: true
      }, {
        id: 3,
        title: 'Apply to jobs',
        completed: false
      }
    ]
  }


  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  // Delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add todo
  addTodo = (title) => {
    const newTodo = {
      id: (Math.random() * 10),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>To-do</h1>
        </div>
        <div className="Todos">
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />

          <div className="form-container">
            <AddTodo addTodo={this.addTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
