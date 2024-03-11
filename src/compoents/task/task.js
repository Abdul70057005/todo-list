import React, { useState } from 'react'

import Timer from '../timer'

const Task = ({
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
  label,
  min,
  sec,
  oneditLabelItem,
}) => {
  const [labell, setLabel] = useState(label)
  const [minutes, setMinutes] = useState(min)
  const [seconds, setSeconds] = useState(sec)

  const onSubmit = (e) => {
    e.preventDefault()
    if (labell === '' || minutes === '' || seconds === '') {
      return
    }
    oneditLabelItem(labell)
  }

  if (editing) {
    return (
      <div>
        <div className="view">
          <input className="toggle" type="checkbox" checked={checked} onChange={() => {}} onClick={onToggleDone} />
          <label>
            <span className="title" onClick={onToggleDone}>
              {labell}
            </span>
            <span className="description">
              <button className="icon icon-play" onClick={onStartTime}></button>
              <button className="icon icon-pause" onClick={onPauseTime}></button>
              {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </span>
            <span className="description">{createItemTime}</span>
          </label>
          <button className="icon icon-edit" onClick={onEditItem}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <form onSubmit={onSubmit} className="new-todo-form">
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={(e) => setLabel(e.target.value)}
            value={labell}
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
      </div>
    )
  }

  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={checked} onChange={() => {}} onClick={onToggleDone} />
      <label>
        <span className="title" onClick={onToggleDone}>
          {labell}
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

export default Task
