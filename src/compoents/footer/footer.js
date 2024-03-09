import React from 'react'

import TasksFilters from '../tasksFilter'

const Footer = ({ count, onClearCompleted, onAllItem, onActiveItem, onCompletedItem }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilters onActiveItem={onActiveItem} onAllItem={onAllItem} onCompletedItem={onCompletedItem} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}
export default Footer
