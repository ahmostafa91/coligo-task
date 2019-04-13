import * as types from './ActionType';
import Announcement from '../api/FakeAnnouncementApi';

export const getAnnouncements = () => {
  return (dispatch) => {
    Announcement.getAllAnnouncements().then((data) => {
      dispatch({
        type: types.FETCHE_ANNOUNCEMENT_SUCCEEDED,
        payload: data
      })
    })
  }
};