import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import { todoCreate } from '../../../api/todos'

import TodoForm from '../../Shared/TodoForm'

class TodoCreate extends Component {
  constructor () {
    super()

    this.state = {
      todo: {
        project: '',
        description: '',
        responsible: '',
        comments: '',
        priority: '',
        duedate: '',
        completed: false
      },
      createdId: null
    }
  }
  handleChange = (event) => {
    // create an object with the key/value of the field I'm typing in
    const updatedField = {
      [event.target.name]: event.target.value,

      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    }
    // merge state and updatedField
    // merge updatedField INTO this.state.book
    // assign updatedField TO this.state.book
    const editedTodo = Object.assign(this.state.todo, updatedField)
    // set the state
    this.setState({ todo: editedTodo })
  }
  onSubmit= async (event) => {
    event.preventDefault()

    const { user, msgAlert } = this.props

    todoCreate(this.state.todo, user)
      .then(res => {
        this.setState({ createdId: res.data.todo._id })
      })
      .then(() => {
        msgAlert({
          heading: 'Create Todo Success',
          variant: 'success',
          message: 'Todo Is Now Displayed. Look at the page.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Create Todo Failed',
          variant: 'danger',
          message: 'T is not displayed due to error: ' + err.message
        })
      })
  }

  render () {
    const { todo, createdId } = this.state
    let todoJsx
    if (createdId) {
      todoJsx = <Redirect to={'/todos'}/>
    } else {
      todoJsx = (
        <div className="loading">
          <div> <br/>
            <h3>Create Task</h3>
            <TodoForm
              todo={todo}
              handleSubmit={this.onSubmit}
              handleChange= {this.handleChange}
            />
          </div>
        </div>
      )
    }
    return (
      <div>
        { todoJsx }
      </div>
    )
  }
}

export default withRouter(TodoCreate)
