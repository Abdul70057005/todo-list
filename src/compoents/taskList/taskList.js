import React from 'react'

import Task from '../task'

const TaskList = ({ todos, onDeleted, onToggleDone, onEditItem, oneditLabelItem, filter, onAddItem }) => {
  let elements = todos.map((item) => {
    let classNameS = ''
    const { id, done, edit, label, min, sec, ...itemProps } = item
    if (done) {
      classNameS += 'completed'
    }
    if (edit) {
      classNameS += 'editing'
    }

    return (
      <li key={id} className={classNameS}>
        <Task
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onEditItem={() => onEditItem(id)}
          oneditLabelItem={() => oneditLabelItem(id)}
          onAddItem={() => onAddItem()}
          done={done}
          label={label}
          min={min}
          sec={sec}
        />
      </li>
    )
  })

  if (filter === 'active') {
    elements = elements.filter((item) => item.props.className === '' || item.props.className === 'editing')
  } else if (filter === 'completed') {
    elements = elements.filter((item) => item.props.className === 'completed' || item.props.className === 'editing')
  }

  return <ul className="todo-list">{elements}</ul>
}

export default TaskList
