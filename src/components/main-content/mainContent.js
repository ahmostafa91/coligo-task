import React, { Component } from 'react';
import './style.css';
import * as data from './consts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAnnouncements } from '../../app/action/AnnouncementAction';
import { getQuizzes } from './../../app/action/QuizzesAction';

class MainContent extends Component {

    componentDidMount() {
        const {getAnnouncement ,getQuiz} = this.props;
        getAnnouncement();
        getQuiz();
    }
    
    render() {
        //console.log(this.props.quiz);
        const announcementArr = this.props.announcement;
        const nameP = announcementArr.map(e => <p className="name">{e.name}</p>); // make <p> for names
        const span = announcementArr.map(e => <span className="title">{e.type}</span>); // make <span> for types
        const contentP = announcementArr.map(e => <p className="content">{e.content}</p>); // make <span> for types
        //////////////
        const quizArr = this.props.quiz;
        const quizName = quizArr.map(e => e.name);
        const course = quizArr.map(e => e.course);
        const topic = quizArr.map(e => e.topic);
        const due = quizArr.map(e => e.due);
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
                            <span> - {data.name}</span>
                            <button>{data.button}</button>
                            </div>
                        <div className="exams-image hide">
                            <img src={data.imageSrc} alt="placeholderImage"/>
                        </div>
                    </section>
                    <section className="announcement">
                        <div className="announcement-head">
                            <h4>{data.announcementHead}</h4>
                            <span>{data.updated}</span>
                            <span className="all-announcement">All</span>
                        </div>
                        <div className="announcement-content">
                            <span className="info-data">
                                <img src={data.imageSrc} alt="placeholderImage" />
                                <span className="name-title">
                                    {nameP[0]}
                                    {span[0]}
                                </span>
                            </span>
                            {contentP[0]}
                        </div>

                        <div className="announcement-content">
                            <span className="info-data">
                                <img src={data.imageSrc} alt="placeholderImage" />
                                <span className="name-title">
                                    {nameP[1]}
                                    {span[1]}
                                </span>
                            </span>
                            {contentP[1]}
                        </div>

                        <div className="announcement-content">
                        <span className="info-data">
                            <img src={data.imageSrc} alt="placeholderImage" />
                            <span className="name-title">
                                {nameP[2]}
                                {span[2]}
                            </span>
                        </span>
                        {contentP[2]}
                    </div>
                    </section>
                    <section className="whats-due">
                        <div className="whats-due-head">
                            <h4>{data.whatsDueHead}</h4>
                            <span className="quote">{data.whatsDueQuote}</span>
                            <span className="all-whats-due">All</span>
                        </div>
                        <div className="whats-due-content">
                            <span className="item-icon"><FontAwesomeIcon icon="hourglass-half" /></span> {quizName[0]}
                            <span className="info">
                                <p>Course : {course[0]}</p>
                                <p>topic : {topic[0]}</p>
                                <p>due to : {due[0]}</p>
                            </span>
                            <button>Start quize</button>
                        </div>

                        <div className="whats-due-content">
                            <span className="item-icon"><FontAwesomeIcon icon="calendar-check" /></span> {quizName[1]}
                            <span className="info">
                                <p>Course : {course[1]}</p>
                                <p>topic : {topic[1]}</p>
                                <p>due to : {due[1]}</p>
                            </span>
                            <button>Start quize</button>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        announcement: state.announcementReducer,
        quiz: state.quizzesReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAnnouncement: bindActionCreators(getAnnouncements ,dispatch),
        getQuiz: bindActionCreators(getQuizzes, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);