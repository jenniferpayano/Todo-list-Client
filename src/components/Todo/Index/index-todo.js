import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { todoIndex, todoDelete } from '../../../api/todos'
import { confirmAlert } from 'react-confirm-alert'
import { Button } from 'react-bootstrap'
import 'react-confirm-alert/src/react-confirm-alert.css'
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
          message: 'Tasks are now displayed. Look at the page.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Index Todo Failed',
          variant: 'danger',
          message: 'Tasks are not displayed due to error: ' + err.message
        })
      })
  }
  todoList () {
    const { user } = this.props
    return this.state.todos.map((currentTodo, i) => {
      console.log(currentTodo)
      return <Todo todo={currentTodo} user= {user} key= {i} onDelete={this.onClickDelete} id={i}/>
    })
  }
  handleDelete = (id, row) => {
    const { user, msgAlert } = this.props
    todoDelete(id, user)
      .then(() => {
        msgAlert({
          heading: 'Task was deleted Successful!',
          variant: 'success',
          message: 'Nice work you did it'
        })
      })
      .then(this.deleteRow(row, user))
      .then(() => this.setState({ deleted: true }))
      .catch((err) => {
        msgAlert({
          heading: 'Task failed to delete',
          variant: 'danger',
          message: 'Failed with error: ' + err.message
        })
      })
  }
  onClickDelete = (props, i) => {
    // const { msgAlert } = this.props
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.handleDelete(props, i)
        },
        {
          label: 'No'
          // onClick: () => alert('Click No')
        }
      ]
    })
  }
  // delete that specific row
  deleteRow = (i, user) => {
    // checks if user is the owner of the task
    if (user._id === this.state.todos[i].owner) {
      const rows = [...this.state.todos]
      rows.splice(i, 1)
      this.setState({
        todos: rows
      })
    }
  }
  render () {
    const { todos } = this.state

    let todoJsx

    if (!todos) {
      todoJsx = <img className="loading" src="https://media.giphy.com/media/YMM6g7x45coCKdrDoj/giphy.gif" alt="loading"/>
    } else {
      todoJsx = (
        <div>
          <br/>
          <Button href="#create">Create Tasks</Button>
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
      <div className="container">
        {todoJsx}
      </div>
    )
  }
}

const Todo = props => (
  <tr>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.project} </td>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.responsible}</td>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.priority} </td>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.duedate} </td>
    <td className= {props.todo.completed ? 'completed' : '' }> {props.todo.completed.toString()}</td>
    <td>
      { (props.todo.owner === props.user._id)
        ? <div> <Link to={`/todos/${props.todo._id}`} key={props.todo._id}>
          <FaPencilAlt/>
        </Link>
        &emsp;&ensp;
        <Button className="btn-primary-table" onClick={() => props.onDelete(props.todo._id, props.id)} id={props.id}>
          <FaTrash/>
        </Button>
        </div>
        : <h6>  </h6>
      }
    </td>
  </tr>
)

export default TodoIndex
