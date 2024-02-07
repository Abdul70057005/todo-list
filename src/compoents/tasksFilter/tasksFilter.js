import React, { Component } from 'react'

export default class TasksFilters extends Component {
  render() {
    const { onActiveItem, onCompletedItem, onAllItem } = this.props

    let handleClick = (e) => {
      let foo = document.querySelectorAll('button')

      for (let i = 0; i < foo.length; i++) {
        foo[i].classList.remove('selected')
      }
      e.currentTarget.classList.add('selected')
    }

    return (
      <ul className="filters">
        <li onClick={onAllItem}>
          <button onClick={handleClick}>All</button>
        </li>
        <li onClick={onActiveItem}>
          <button onClick={handleClick}>Active</button>
        </li>
        <li onClick={onCompletedItem}>
          <button onClick={handleClick}>Completed</button>
        </li>
      </ul>
    )
  }
}
