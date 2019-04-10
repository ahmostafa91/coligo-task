import React, { Component } from 'react';
import './style.css';
import * as data from './consts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MainContent extends Component {
    
    render() {
        return (

            <React.Fragment>
                <main className="content-container">
                    <section className="exams-time">
                        <div className="exams-content">
                            <h1>{data.mainHeading}</h1>
                            <p>
                                {data.content}
                            </p>
                            <q>
                                {data.quote}
                            </q>
                            <span>{data.name}</span>
                            <button>{data.button}</button>
                            </div>
                        <div className="exams-image hide">
                            <img src={data.imageSrc} alt="placeholderImage"/>
                        </div>
                    </section>
                    <section className="announcement">
                        <div className="announcement-head">
                            <h4>{data.announcementHead}</h4>
                            <span>gasgsfgzdfgzdrfgzdhzdghzdhdzfhdthb</span>
                            <span className="all-announcement">All</span>
                        </div>
                        <div className="announcement-content">
                            <span className="info-data">
                                <img src={data.imageSrc} alt="placeholderImage" />
                                <span className="name-title">
                                    <p>{data.name}</p>
                                    <span className="title">{data.title}</span>
                                </span>
                            </span>
                            <p>{data.content}</p>
                        </div>

                        <div className="announcement-content">
                            <span className="info-data">
                                <img src={data.imageSrc} alt="placeholderImage" />
                                <span className="name-title">
                                    <p>{data.name}</p>
                                    <span className="title">{data.title}</span>
                                </span>
                            </span>
                            <p>{data.content}</p>
                        </div>
                    </section>
                    <section className="whats-due">
                        <div className="whats-due-head">
                            <h4>{data.announcementHead}</h4>
                            <span>gasgsfgzdfgzdrfgzdhzdghzdhdzfhdthb</span>
                            <span className="all-whats-due">All</span>
                        </div>
                        <div className="whats-due-content">
                            <span className="item-icon"><FontAwesomeIcon icon="archway" /> gasgsfgzdfgzdrfgzdhzdg</span>
                            <p>Course: math</p>
                            <p>topic: math101</p>
                            <p>due to: 20 Dec 9:00</p>
                            <button>Start quize</button>
                        </div>

                        <div className="whats-due-head">
                            <h4>{data.announcementHead}</h4>
                            <span>gasgsfgzdfgzdrfgzdhzdghzdhdzfhdthb</span>
                            <span className="all-whats-due">All</span>
                        </div>
                        <div className="whats-due-content">
                            <span className="item-icon"><FontAwesomeIcon icon="archway" /> gasgsfgzdfgzdrfgzdhzdg</span>
                            <p>Course: math</p>
                            <p>topic: math101</p>
                            <p>due to: 20 Dec 9:00</p>
                            <button>Start quize</button>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default MainContent;