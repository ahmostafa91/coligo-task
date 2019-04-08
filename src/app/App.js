import React, { Component } from 'react';
import './App.css';
import Body from './../components/body/body';
import Sidebar from './../components/sidebar/sidebar';
import { faEnvelope, faBell, faIgloo, faArchway } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faEnvelope, faBell, faIgloo, faArchway)

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="body">
          <Body></Body>
        </div>
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>     
      </div>

    );
  }
}

export default App;
