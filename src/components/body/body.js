import React, { Component } from 'react';
import './style.css';
import Header from '../header/Header';
import MainContent from '../main-content/MainContent';

class Body extends Component {

    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <MainContent></MainContent>
            </React.Fragment>
        )
    }
}

export default Body;