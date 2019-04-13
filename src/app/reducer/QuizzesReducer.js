import * as types from '../action/ActionType';

export default function quizzesReducer(
    state = [],
    action,
) {
    switch (action.type) {
        case types.FETCHE_QUIZZES_SUCCEEDED:
            return action.payload
        default:
            return state;
    }
}