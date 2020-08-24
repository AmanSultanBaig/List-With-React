import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ViewProfile from './components/ViewProfile'
import UserList from './components/UserList'

class App extends Component {

  render() {

    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              <span style={{ fontWeight: '800' }}>USERLIST With REACT JS</span>
            </a>
          </nav>
          <Route path="/" exact component={UserList} />
          <Route path="/view-profile/:id" component={ViewProfile} />
        </div>
      </Router>
    );
  }
}

export default App