import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className='form'>
        <input
          className='text-input'
          type='text'
          name='title'
          placeholder='Add Todo ...'
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Go'
          className='btn'
        />
      </form>
    )
  }
}

export default AddTodo;
