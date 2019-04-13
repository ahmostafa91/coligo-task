import * as types from '../action/ActionType';

export default function announcementReducer(
    state = [],
    action,
) {
    switch (action.type) {
        case types.FETCHE_ANNOUNCEMENT_SUCCEEDED:
            return action.payload
        default:
            return state;
    }
}