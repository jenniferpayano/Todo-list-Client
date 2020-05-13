import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { todoIndex, todoDelete } from '../../../api/todos'
import { confirmAlert } from 'react-confirm-alert'
import { Button } from 'react-bootstrap'
import 'react-confirm-alert/src/react-confirm-alert.css'

const OnClickDelete = (event) => {
  console.log(event.target.id)
  // const { msgAlert } = this.props
  confirmAlert({
    title: 'Confirm to Delete',
    message: 'Are you sure to do this.',
    buttons: [
      {
        label: 'Yes',
        onClick: (this.handleDelete)
      },
      {
        label: 'No'
        // onClick: () => alert('Click No')
      }
    ]
  })
}

const Todo = props => (
  <tr>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.project} </td>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.responsible}</td>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.priority} </td>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.duedate} </td>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.completed.toString()}</td>
    <td>
      <Link to={`/todos/${props.todo._id}`} key={props.todo._id}>
        <FaPencilAlt/>
      </Link>
      &emsp;&ensp;
      <Button onClick={OnClickDelete} id={props.todo._id}>
        <FaTrash/>
      </Button>

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
  handleDelete = event => {
    const { user, msgAlert, match } = this.props
    todoDelete(match.params.id, user)
      .then(() => {
        msgAlert({
          heading: 'Movie Delete Success!',
          variant: 'success',
          message: 'Nice work you did it'
        })
      })
      .then(() => this.setState({ deleted: true }))
      .catch((err) => {
        msgAlert({
          heading: 'Movie Delete Failed',
          variant: 'danger',
          message: 'Failed with error: ' + err.message
        })
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
          <h3>Task Tracker</h3>
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
