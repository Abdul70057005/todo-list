import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import NewTaskForm from '../newTaskForm'
import TaskList from '../taskList'
import Footer from '../footer'
import './app.css'

export default class App extends Component {
  maxId = 100

  state = {
    todoData: [],
    filter: 'all',
  }

  createTodoItem(label) {
    return {
      label,
      done: false,
      checked: false,
      edit: false,
      editing: false,
      id: this.maxId++,
      createItemTime: new Date(),
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

      return {
        todoData: newArray,
      }
    })
  }

  addItem = (text) => {
    let newItem = this.createTodoItem(text)
    let timeAdd = newItem.createItemTime

    this.setState(({ todoData }) => {
      let time = formatDistanceToNow(timeAdd, { includeSeconds: true })

      newItem = { ...newItem, createItemTime: `created ${time}` }

      const newArr = [...todoData, newItem]

      return {
        todoData: newArr,
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      //1.update object
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, done: !oldItem.done, checked: !oldItem.checked }

      //2.new Array
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]

      return {
        todoData: newArray,
      }
    })
  }

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const idx = todoData.filter((el) => !el.done)

      const newArray = [...idx]

      return {
        todoData: newArray,
      }
    })
  }

  editItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      //1.update object
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, edit: !oldItem.edit, editing: !oldItem.editing }

      //2.new Array

      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]

      return {
        todoData: newArray,
      }
    })
  }

  editLabelItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      //1.update object
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, editing: !oldItem.editing, edit: !oldItem.edit }

      //2.new Array

      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]

      return {
        todoData: newArray,
      }
    })
  }

  allItem = () => {
    this.setState(() => {
      return {
        filter: 'all',
      }
    })
  }

  activeItem = () => {
    this.setState(() => {
      return {
        filter: 'active',
      }
    })
  }

  completedItem = () => {
    this.setState(() => {
      return {
        filter: 'completed',
      }
    })
  }

  render() {
    const { todoData, filter } = this.state
    const doneCount = todoData.filter((el) => el.done).length
    const todoCount = todoData.length - doneCount

    return (
      <section className="todoapp">
        <NewTaskForm onItemAdded={this.addItem} />

        <section className="main">
          <TaskList
            todos={todoData}
            filter={filter}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onEditItem={this.editItem}
            onActiveItem={this.activeItem}
            oneditLabelItem={this.editLabelItem}
            onAddItem={this.addItem}
          />
          <Footer
            count={todoCount}
            onClearCompleted={this.clearCompleted}
            onAllItem={this.allItem}
            onActiveItem={this.activeItem}
            onCompletedItem={this.completedItem}
            filter={filter}
          />
        </section>
      </section>
    )
  }
}

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
