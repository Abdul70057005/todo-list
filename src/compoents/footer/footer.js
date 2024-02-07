import React, { Component } from 'react'

import TasksFilters from '../tasksFilter'

export default class Footer extends Component {
  render() {
    const { count, onClearCompleted, onAllItem, onActiveItem, onCompletedItem } = this.props

    return (
      <footer className="footer">
        <span className="todo-count">{count} items left</span>
        <TasksFilters
          onActiveItem={() => onActiveItem()}
          onAllItem={() => onAllItem()}
          onCompletedItem={() => onCompletedItem()}
        />
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      </footer>
    )
  }
}
