import React, { Component } from 'react'

export default class NewTaskForm extends Component {
  state = {
    label: '',
    minutes: '',
    seconds: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }
  onMinutes = (e) => {
    this.setState({
      minutes: e.target.value,
    })
  }
  onSeconds = (e) => {
    this.setState({
      seconds: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onItemAdded(this.state.label, this.state.minutes, this.state.seconds)
    this.setState({
      label: '',
      minutes: '',
      seconds: '',
    })
  }

  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <form onSubmit={this.onSubmit} className="new-todo-form">
          <input
            className="new-todo"
            placeholder="Task"
            autoFocus
            onChange={this.onLabelChange}
            value={this.state.label}
          />
          <input
            className="new-todo-form__timer"
            type="number"
            placeholder="Min"
            autoFocus
            onChange={this.onMinutes}
            value={this.state.minutes}
          />
          <input
            className="new-todo-form__timer"
            type="number"
            placeholder="Sec"
            autoFocus
            onChange={this.onSeconds}
            value={this.state.seconds}
          />
          <button type="submit" onSubmit={this.onSubmit}></button>
        </form>
      </header>
    )
  }
}
