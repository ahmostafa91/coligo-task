import React, { Component } from 'react';
import './App.css';
import Body from '../components/body/Body';
import Sidebar from '../components/sidebar/Sidebar';
import { faEnvelope, faBell, faIgloo, faCalendarAlt, faHome, faBook, faGraduationCap, faChartLine, faBullhorn, faHourglassHalf, faCalendarCheck, faBars, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faEnvelope, faBell, faIgloo, faCalendarAlt, faHome, faBook, faGraduationCap, faChartLine, faBullhorn, faHourglassHalf, faCalendarCheck, faBars, faArrowAltCircleDown)

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
