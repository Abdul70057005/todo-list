import React, { Component } from 'react'

export default class Task extends Component {
  state = {
    label: this.props.label,
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.oneditLabelItem(this.state.label)
  }

  render() {
    const { onDeleted, onToggleDone, checked, onEditItem, editing, createItemTime } = this.props

    if (editing) {
      return (
        <div>
          <div className="view">
            <input className="toggle" type="checkbox" checked={checked} onChange={() => {}} onClick={onToggleDone} />
            <label>
              <span className="description" onClick={onToggleDone}>
                {this.state.label}
              </span>
              <span className="created">{createItemTime}</span>
            </label>
            <button className="icon icon-edit" onClick={onEditItem}></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
          </div>
          <form onSubmit={this.onSubmit}>
            <input type="text" className="edit" onChange={this.onLabelChange} value={this.state.label} />
          </form>
        </div>
      )
    }

    return (
      <div className="view">
        <input className="toggle" type="checkbox" checked={checked} onChange={() => {}} onClick={onToggleDone} />
        <label>
          <span className="description" onClick={onToggleDone}>
            {this.state.label}
          </span>
          <span className="created">{createItemTime}</span>
        </label>
        <button className="icon icon-edit" onClick={onEditItem}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    )
  }
}
