import React from 'react'

const TodoForm = ({ todo, handleSubmit, handleChange }) => (
  <div style={{ marginTop: 10 }}>
    <h3> Create New Todo </h3>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Project: </label>
        <input
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
            type="date"
            className="form-control"
            name="duedate"
            value={todo.duedate || ''}
            onChange={handleChange}
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
export default TodoForm
