import React, { Component } from 'react';
import './style.css';
import Header from './../header/header';
import MainContent from './../main-content/mainContent';

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