import React, { Component } from 'react';
import './style.css';
import * as data from './consts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <header>
                    <h2 className="user">Wellcome {data.headName},</h2>
                    <div className="info">
                        <label className="search" data-pic="&#61442;">
                            <input type="text" placeholder="Search"/>
                        </label>
                        <span className="res-order">
                            <span className="bell badge"><FontAwesomeIcon icon="bell" size='2x'/></span>
                            <span className="envelope badge"><FontAwesomeIcon icon="envelope" size='2x' /></span>
                        </span>
                        <img className="user-photo" src={data.headImage} alt={data.headImage} />
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;