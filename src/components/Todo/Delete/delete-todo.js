import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Modal from 'react-modal'
import { todoShow } from '../../../api/todos'

class TodoDelete extends Component {
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
          heading: 'Show todo Failed',
          variant: 'danger',
          message: 'Todo is not displayed due to error: ' + err.message
        })
      })
  }
  render () {
    const { todo, modal } = this.state
    let todoJsx
    if (!todo) {
      todoJsx = 'Loading...'
    } else {
      todoJsx = (
        <div className={modal ? 'modal' : undefined}>
          {modal && <Link to="/todo">Close</Link>}
          <div>
            <img src="https://source.unsplash.com/random" />
          </div>
        </div>
      )
    }

    return (
      todoJsx
    )
  }
}

export default TodoDelete
