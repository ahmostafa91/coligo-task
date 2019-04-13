import React, { Component } from 'react';
import * as data from './consts';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimateHeight from 'react-animate-height';

class Sidebar extends Component {

    state = {
        height: 0,
      };
    
      toggle = () => { // function used to toggle the height
        const { height } = this.state;
    
        this.setState({
          height: height === 0 ? 'auto' : 0,
        });
      };

    render() {

        const { height } = this.state;
        
        return (
            <React.Fragment>
                <h3 className = "logo">{data.head}<span className="collapse" onClick={this.toggle}><FontAwesomeIcon icon="arrow-alt-circle-down" size="md" /></span></h3>
                <ul className = "menu hide">
                    <li className="menu-item"><span className="item-icon"><FontAwesomeIcon icon="home" /></span>{data.li[0]}</li>
                    <li className="menu-item"><span className="item-icon"><FontAwesomeIcon icon="calendar-alt" /></span>{data.li[1]}</li>
                    <li className="menu-item"><span className="item-icon"><FontAwesomeIcon icon="book" /></span>{data.li[2]}</li>
                    <li className="menu-item"><span className="item-icon"><FontAwesomeIcon icon="graduation-cap" /></span>{data.li[3]}</li>
                    <li className="menu-item"><span className="item-icon"><FontAwesomeIcon icon="chart-line" /></span>{data.li[4]}</li>
                    <li className="menu-item"><span className="item-icon"><FontAwesomeIcon icon="bullhorn" /></span>{data.li[5]}</li>
                </ul>
                
                <AnimateHeight
                duration={ 500 }
                height={ height }
                >
                <ul className = "menu collapse">
                    <li className="menu-item"><span className="item-icon"><FontAwesomeIcon icon="home" /></span>{data.li[0]}</li>
                    <li className="menu-item"><span className="item-icon"><FontAwesomeIcon icon="calendar-alt" /></span>{data.li[1]}</li>
                    <li className="menu-item"><span className="item-icon"><FontAwesomeIcon icon="book" /></span>{data.li[2]}</li>
                    <li className="menu-item"><span className="item-icon"><FontAwesomeIcon icon="graduation-cap" /></span>{data.li[3]}</li>
                    <li className="menu-item"><span className="item-icon"><FontAwesomeIcon icon="chart-line" /></span>{data.li[4]}</li>
                    <li className="menu-item"><span className="item-icon"><FontAwesomeIcon icon="bullhorn" /></span>{data.li[5]}</li>
                </ul>
                </AnimateHeight>
            </React.Fragment>
        )
    }
}

export default Sidebar;