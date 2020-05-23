import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import Home from '../Home/Home'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import TodoCreate from '../Todo/Create/create-todo'
import TodoIndex from '../Todo/Index/index-todo'
import TodoUpdate from '../Todo/Update/update-todo'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' component={Home} user={user} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          {/* TODO CREATE  */}
          <AuthenticatedRoute user={user} path='/create' render={() => (
            <TodoCreate msgAlert={this.msgAlert} user={user} />
          )} />
          {/* TODO Index Route: */}
          <AuthenticatedRoute exact path="/todos" user={this.state.user} render={() => (
            <TodoIndex msgAlert={this.msgAlert} user={this.state.user} />
          )}/>
          {/* Todo Update Route: */}
          <AuthenticatedRoute exact path="/todos/:id" user={this.state.user} render={({ match }) => (
            <TodoUpdate msgAlert={this.msgAlert} user={this.state.user} match={match}/>
          )}/>

        </main>
      </Fragment>
    )
  }
}

export default App
