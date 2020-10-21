import React, { Component } from 'react';
import '../App.css';
import Todos from './Todos';

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
        completed: false
      }, {
        id: 3,
        title: 'Apply to jobs',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>To -do</h1>
        </div>
        <div className="Todos">
          <Todos todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
