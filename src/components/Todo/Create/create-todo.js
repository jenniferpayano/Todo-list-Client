import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../../apiConfig'

import TodoForm from '../../Shared/TodoForm'

class Create extends Component {
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
      [event.target.name]: event.target.value
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
    /* API call */
    try {
      const res = await axios({
        url: `${apiUrl}/todos`,
        method: 'POST',
        data: {
          project: this.state.project,
          description: this.state.description,
          responsible: this.state.responsible,
          comments: this.state.comments,
          priority: this.state.priority,
          duedate: this.state.duedate,
          completed: this.state.completed
        }
      })
      this.setState({ createdId: res.data.book._id })
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    const { todo, createdId } = this.state
    let todoJsx
    if (createdId) {
      todoJsx = <Redirect to={`/todo/${createdId}`}/>
    } else {
      todoJsx = (
        <TodoForm
          todo={todo}
          handleSubmit={this.onSubmit}
          handleChange= {this.handleChange}
        />
      )
    }
    return (
      <div>
        { todoJsx }
      </div>
    )
  }
}

export default withRouter(Create)
