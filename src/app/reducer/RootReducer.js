import { combineReducers } from 'redux';
import announcementReducer from './AnnouncementReducer';
import quizzesReducer from './QuizzesReducer';

const rootReducer = combineReducers({
    announcementReducer,
    quizzesReducer
});

export default rootReducer;