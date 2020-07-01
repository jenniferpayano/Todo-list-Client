import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { todoShow, todoUpdate } from '../../../api/todos'

import TodoForm from '../../Shared/TodoForm'

class TodoUpdate extends Component {
  constructor () {
    super()

    this.state = {
      todo: null,
      updated: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props
    todoShow(match.params.id, user)
      .then(res => {
        this.setState({ todo: res.data.todo })
      })
      .then(() => {
        msgAlert({
          heading: 'Show Todo Success',
          variant: 'success',
          message: 'Tasks are now displayed. Look at the page.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Show todo Failed',
          variant: 'danger',
          message: 'Tasks are not displayed due to error: ' + err.message
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, match, msgAlert } = this.props
    todoUpdate(match.params.id, this.state.todo, user)
      .then(res => {
        this.setState({ updated: true })
      })
      .then(() => {
        msgAlert({
          heading: 'Update Todo Success',
          variant: 'success',
          message: 'Task has been updated. Look at the page.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Update Todo Failed',
          variant: 'danger',
          message: 'Task was not updated due to error: ' + err.message
        })
      })
  }

  handleChange = event => {
    this.setState({ todo: { ...this.state.todo,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value } })
  }

  render () {
    const { todo, updated } = this.state

    let todoJsx
    if (!todo) {
      todoJsx = <img className="loading" src="https://media.giphy.com/media/YMM6g7x45coCKdrDoj/giphy.gif" alt="loading"/>
    } else if (updated) {
      todoJsx = <Redirect to={'/todos'}/>
    } else {
      todoJsx = (
        <div className="form-group">
          <h3>Update Task</h3>
          <br/>
          <TodoForm
            todo={todo}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      )
    }

    return (
      todoJsx
    )
  }
}

export default TodoUpdate
