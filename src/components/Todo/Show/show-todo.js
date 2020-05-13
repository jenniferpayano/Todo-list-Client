import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import { todoDelete, todoShow } from '../../../api/todos'

class TodoShow extends Component {
  constructor () {
    super()

    this.state = {
      todo: null
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
          message: 'Todo Is Now Displayed. Look at the page.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Todo Movie Failed',
          variant: 'danger',
          message: 'Todo is not displayed due to error: ' + err.message
        })
      })
  }

  handleDelete = event => {
    const { user, msgAlert, match } = this.props
    todoDelete(match.params.id, user)
      .then(() => {
        msgAlert({
          heading: 'Todo Delete Success!',
          variant: 'success',
          message: 'Nice work you did it'
        })
      })
      .then(() => this.setState({ deleted: true }))
      .catch((err) => {
        msgAlert({
          heading: 'Todo Delete Failed',
          variant: 'danger',
          message: 'Failed with error: ' + err.message
        })
      })
  }

  render () {
    const { todo, deleted } = this.state

    let todoJsx

    if (!todo) {
      todoJsx = 'Loading...'
    } else if (deleted) {
      todoJsx = <Redirect to="/todos"/>
    } else {
      todoJsx = (
        <div>
          <h3>Task Show Page</h3>
          <h3>Project Name: {todo.project}</h3>
          <h4>description: {todo.director}</h4>
          <button onClick={this.handleDelete}>Delete Task</button>
          <button>
            <Link to={`/todos/${todo._id}/edit`}>Update Todo</Link>
          </button>
        </div>
      )
      // movieJsx = <div>
      //   <h3>Title: {movie.title}</h3>
      //   <h4>Director: {movie.director}</h4>
      // </div>
    }

    return (
      todoJsx
    )
  }
}

export default TodoShow
