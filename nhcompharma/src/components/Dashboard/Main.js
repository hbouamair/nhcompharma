import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import UserProfile from './UserProfile'
import Commandes from './Commandes'


class Main extends Component {
  render() {
    return (
      <div className="main-panel">
       
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/commandes" component={Commandes} />
          <Redirect from='*' to='/dashboard' />
        </Switch>
      </div>
    )
  }
}

export default Main