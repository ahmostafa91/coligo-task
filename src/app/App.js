import React, { Component } from 'react';
import './App.css';
import Body from './../components/body/body';
import Sidebar from './../components/sidebar/sidebar';

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
