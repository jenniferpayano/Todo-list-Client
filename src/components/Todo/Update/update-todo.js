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
        console.log(res.data.todo)
      })
      .then(() => {
        msgAlert({
          heading: 'Show Todo Success',
          variant: 'success',
          message: 'Todo Is Now Displayed. Look at the page.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Show todo Failed',
          variant: 'danger',
          message: 'Todo is not displayed due to error: ' + err.message
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
          message: 'Todo Is Now Updated. Look at the page.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Update Todo Failed',
          variant: 'danger',
          message: 'Todo was not updated due to error: ' + err.message
        })
      })
  }

  handleChange = event => {
    this.setState({ todo: { ...this.state.todo, [event.target.name]: event.target.value } })
  }

  render () {
    const { todo, updated } = this.state

    let todoJsx
    if (!todo) {
      todoJsx = 'Loading...in update'
    } else if (updated) {
      todoJsx = <Redirect to={`/todos/${this.props.match.params.id}`}/>
    } else {
      todoJsx = (
        <div>
          <h3>Movie Update Page</h3>
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
