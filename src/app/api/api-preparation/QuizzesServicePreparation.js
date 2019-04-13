import Api from './Api';

export default class Quizzes extends Api {


    static getAllQuizzes() {
        return super.get('/quiz').then(res => res.json())
    }
}

// this api ready to pass the path to main url to fetch the quiz data then import it and using it in components