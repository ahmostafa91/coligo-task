import * as types from './ActionType';
import Quizzes from '../api/FakeQuizzesApi';

export const getQuizzes = () => {
  return (dispatch) => {
    Quizzes.getAllQuizzes().then((data) => {
      dispatch({
        type: types.FETCHE_QUIZZES_SUCCEEDED,
        payload: data
      })
    })
  }
};