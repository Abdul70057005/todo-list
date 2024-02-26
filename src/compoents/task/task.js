import React, { Component } from 'react'

import Timer from '../timer'

export default class Task extends Component {
  state = {
    label: this.props.label,
    minutes: this.props.min,
    seconds: this.props.sec,
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
    this.props.oneditLabelItem(this.state.label)
  }

  render() {
    const {
      onDeleted,
      onToggleDone,
      checked,
      onEditItem,
      editing,
      createItemTime,
      onStartTime,
      onPauseTime,
      isPause,
      done,
    } = this.props
    const { minutes, seconds } = this.state

    if (editing) {
      return (
        <div>
          <div className="view">
            <input className="toggle" type="checkbox" checked={checked} onChange={() => {}} onClick={onToggleDone} />
            <label>
              <span className="title" onClick={onToggleDone}>
                {this.state.label}
              </span>
              <span className="description">
                <button className="icon icon-play" onClick={this.props.onStartTime}></button>
                <button className="icon icon-pause" onClick={this.props.onPauseTime}></button>
                {this.state.minutes.toString().padStart(2, '0')}:{this.state.seconds.toString().padStart(2, '0')}
              </span>
              <span className="description">{createItemTime}</span>
            </label>
            <button className="icon icon-edit" onClick={onEditItem}></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
          </div>
          <form onSubmit={this.onSubmit} className="new-todo-form">
            <input
              className="new-todo"
              placeholder="What needs to be done?"
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
        </div>
      )
    }

    return (
      <div className="view">
        <input className="toggle" type="checkbox" checked={checked} onChange={() => {}} onClick={onToggleDone} />
        <label>
          <span className="title" onClick={onToggleDone}>
            {this.state.label}
          </span>
          <span className="description">
            <Timer
              minutes={minutes}
              seconds={seconds}
              onStartTime={() => onStartTime()}
              onPauseTime={() => onPauseTime()}
              isPause={isPause}
              done={done}
            />
          </span>
          <span className="description">{createItemTime}</span>
        </label>
        <button className="icon icon-edit" onClick={onEditItem}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    )
  }
}
