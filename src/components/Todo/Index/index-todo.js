import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { todoIndex } from '../../../api/todos'

const Todo = props => (
  <tr>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.project} </td>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.responsible}</td>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.priority} </td>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.duedate} </td>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.completed.toString()}</td>
    <td>
      <Link to={`/todos/${props.todo._id}`} key={props.todo._id}>
          Edit
      </Link>
    </td>
  </tr>
)

class TodoIndex extends Component {
  constructor () {
    super()

    this.state = {
      todos: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    todoIndex(user)
      .then(res => {
        this.setState({ todos: res.data.todos })
      })
      .then(() => {
        msgAlert({
          heading: 'Index Todo Success',
          variant: 'success',
          message: 'Movies Are Now Displayed. Look at the page.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Index Todo Failed',
          variant: 'danger',
          message: 'Movies are not displayed due to error: ' + err.message
        })
      })
  }
  todoList () {
    return this.state.todos.map(function (currentTodo, i) {
      return <Todo todo={currentTodo} key= {i} />
    })
  }
  render () {
    const { todos } = this.state

    let todoJsx

    if (!todos) {
      todoJsx = 'Loading...'
    } else {
      todoJsx = (
        <div>
          <h3>Task List Page</h3>
          <table className="table table-striped" style= {{ marginTop: 20 }}>
            <thead>
              <tr>
                <th> Project </th>
                <th> Responsible </th>
                <th> Priority </th>
                <th> Due Date </th>
                <th> Completed </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              { this.todoList() }
            </tbody>
          </table>
        </div>
      )
    }

    return (
      todoJsx
    )
  }
}

export default TodoIndex