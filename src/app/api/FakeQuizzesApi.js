import Api from './Api';

export default class Quizzes extends Api {


    static getAllQuizzes() {
        return super.get('/quizzes').then(res => res.json())
    }
}