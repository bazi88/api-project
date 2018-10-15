import React, { Component } from 'react';
import './App.css';
import { Switch, Route,withRouter } from 'react-router-dom'
import Search from './Search';
import User from './User';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>React Router API Github</h1>
        <Switch>
          <Route exact path='/' component={Search}/> 
          <Route path='/users/:username?/:link?' component={User}/> 
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
