import React, { useState } from 'react'

const NewTaskForm = ({ onItemAdded }) => {
  const [label, setLabel] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    onItemAdded(label, minutes, seconds)
    setLabel('')
    setMinutes('')
    setSeconds('')
  }

  return (
    <header className="header">
      <h1>Todos</h1>
      <form onSubmit={onSubmit} className="new-todo-form">
        <input
          className="new-todo"
          placeholder="Task"
          autoFocus
          onChange={(e) => setLabel(e.target.value)}
          value={label}
        />
        <input
          className="new-todo-form__timer"
          type="number"
          placeholder="Min"
          autoFocus
          onChange={(e) => setMinutes(e.target.value)}
          value={minutes}
        />
        <input
          className="new-todo-form__timer"
          type="number"
          placeholder="Sec"
          autoFocus
          onChange={(e) => setSeconds(e.target.value)}
          value={seconds}
        />
        <button type="submit" onSubmit={onSubmit}></button>
      </form>
    </header>
  )
}

export default NewTaskForm
