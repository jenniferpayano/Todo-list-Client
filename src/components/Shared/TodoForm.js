import React from 'react'
const TodoForm = ({ todo, handleSubmit, handleChange }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>Create Task</h3> <br/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Project: </label>
          <input
            required="required"
            type="text"
            className="form-control"
            name="project"
            value={todo.project || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            required="required"
            type="text"
            className="form-control"
            name="description"
            value={todo.description || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            required="required"
            type="text"
            className="form-control"
            name="responsible"
            value={todo.responsible || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Comments: </label>
          <input
            type="text"
            className="form-control"
            name="comments"
            value={todo.comments || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Priority: </label>
          <br/>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityLow"
              value="Low"
              checked={todo.priority === 'Low' || ''}
              onChange={handleChange}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityMedium"
              value="Medium"
              checked={todo.priority === 'Medium' || ''}
              onChange={handleChange}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityHigh"
              value="High"
              checked={todo.priority === 'High' || ''}
              onChange={handleChange}
            />
            <label className="form-check-label">High</label>
          </div>
          <div className="form-group">
            <label>Due Date: </label>
            <input
              required="required"
              type="date"
              className="form-control"
              name="duedate"
              value={todo.duedate || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="completed"
              id="completed"
              value= {todo.completed}
              checked={todo.completed}
              onChange={handleChange}
            />
            <label className="form-check-label">Completed</label>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
)
export default TodoForm
