import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import NewTaskForm from '../newTaskForm'
import TaskList from '../taskList'
import Footer from '../footer'
import './app.css'

const App = () => {
  const maxId = function getRandom(max) {
    return Math.floor(Math.random() * max)
  }

  const [todoData, setTodoData] = useState([])
  const [filter, setFilter] = useState('all')

  const createTodoItem = (label, min, sec) => {
    return {
      label,
      done: false,
      checked: false,
      edit: false,
      editing: false,
      id: maxId(1000),
      createItemTime: new Date(),
      min,
      sec,
    }
  }

  const deleteItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id)
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    setTodoData(newArray)
  }

  const addItem = (text, min, sec) => {
    let newItem = createTodoItem(text, min, sec)
    let timeAdd = newItem.createItemTime

    let time = formatDistanceToNow(timeAdd, { includeSeconds: true })
    newItem = { ...newItem, createItemTime: `created ${time}` }
    const newArr = [...todoData, newItem]

    setTodoData(newArr)
  }

  const onToggleDone = (id) => {
    const idx = todoData.findIndex((el) => el.id === id)
    //1.update object
    const oldItem = todoData[idx]
    const newItem = { ...oldItem, done: !oldItem.done, checked: !oldItem.checked }

    //2.new Array
    const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]
    setTodoData(newArray)
  }

  const clearCompleted = () => {
    const idx = todoData.filter((el) => !el.done)

    const newArray = [...idx]
    setTodoData(newArray)
  }

  const editItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id)
    //1.update object
    const oldItem = todoData[idx]
    const newItem = { ...oldItem, edit: !oldItem.edit, editing: !oldItem.editing }

    //2.new Array

    const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]
    setTodoData(newArray)
  }

  const editLabelItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id)
    //1.update object
    const oldItem = todoData[idx]
    const newItem = { ...oldItem, editing: !oldItem.editing, edit: !oldItem.edit }

    //2.new Array

    const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]
    setTodoData(newArray)
  }

  const allItem = () => {
    setFilter('all')
  }

  const activeItem = () => {
    setFilter('active')
  }

  const completedItem = () => {
    setFilter('completed')
  }

  const doneCount = todoData.filter((el) => el.done).length
  const todoCount = todoData.length - doneCount

  return (
    <section className="todoapp">
      <NewTaskForm onItemAdded={addItem} />

      <section className="main">
        <TaskList
          todos={todoData}
          filter={filter}
          onDeleted={deleteItem}
          onToggleDone={onToggleDone}
          onEditItem={editItem}
          onActiveItem={activeItem}
          oneditLabelItem={editLabelItem}
          onAddItem={addItem}
        />
        <Footer
          count={todoCount}
          onClearCompleted={clearCompleted}
          onAllItem={allItem}
          onActiveItem={activeItem}
          onCompletedItem={completedItem}
          filter={filter}
        />
      </section>
    </section>
  )
}
export default App

App.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
  onEditItem: () => {},
  oneditLabelItem: () => {},
  onAddItem: () => {},
  onClearCompleted: () => {},
  onAllItem: () => {},
  onActiveItem: () => {},
  onCompletedItem: () => {},
  todoData: [],
  checked: false,
}

App.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
  todoCount: PropTypes.number,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  onEditItem: PropTypes.func,
  oneditLabelItem: PropTypes.func,
  onAddItem: PropTypes.func,
  onClearCompleted: PropTypes.func,
  onAllItem: PropTypes.func,
  onActiveItem: PropTypes.func,
  onCompletedItem: PropTypes.func,
}
