import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../../apiConfig'

class Create extends Component {
  constructor (props) {
    super(props)

    this.onChangeTodoProject = this.onChangeTodoProject.bind(this)
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this)
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this)
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this)
    this.onChangeTodoComments = this.onChangeTodoComments.bind(this)
    this.onChangeTodoDueDate = this.onChangeTodoDueDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      project: '',
      description: '',
      responsible: '',
      comments: '',
      priority: '',
      duedate: '',
      completed: false
    }
  }
  onChangeTodoProject (e) {
    this.setState({
      project: e.target.value
    })
  }
  onChangeTodoDescription (e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeTodoResponsible (e) {
    this.setState({
      responsible: e.target.value
    })
  }
  onChangeTodoComments (e) {
    this.setState({
      comments: e.target.value
    })
  }
  onChangeTodoPriority (e) {
    this.setState({
      priority: e.target.value
    })
  }
  onChangeTodoDueDate (e) {
    this.setState({
      duedate: e.target.value
    })
  }
  onSubmit (e) {
    e.preventDefault()

    console.log('Form Submitted:')
    console.log(`Todo Project: ${this.state.project}`)
    console.log(`Todo Description: ${this.state.description}`)
    console.log(`Todo Responsible: ${this.state.responsible}`)
    console.log(`Todo Comments: ${this.state.comments}`)
    console.log(`Todo Priority: ${this.state.priority}`)
    console.log(`Todo DueDate: ${this.state.duedate}`)
    /* API call */
    axios({
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
      .then((res) => console.log(res.data))
      .catch(console.error)

    this.setState({
      project: '',
      description: '',
      responsible: '',
      comments: '',
      priority: '',
      duedate: '',
      completed: false
    })
  }
  render () {
    return (
      <div style={{ marginTop: 10 }}>
        <h3> Create New Todo </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Project: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.project}
              onChange={this.onChangeTodoProject}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </div>
          <div className="form-group">
            <label>Comments: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.comments}
              onChange={this.onChangeTodoComments}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.priority === 'Low'}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.priority === 'Medium'}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.priority === 'High'}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">High</label>
            </div>
            <div className="form-group">
              <label>Due Date: </label>
              <input
                type="date"
                className="form-control"
                value={this.state.duedate}
                onChange={this.onChangeTodoDueDate}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary"
                value="Create Todo"
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(Create)
