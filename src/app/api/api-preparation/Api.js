export default class Api {

    static get(relativePath) {
        return fetch(this.BASE_URL + relativePath);
    }
}

Api.BASE_URL = 'http://test.coligolms.com/api';

// this api ready to use main url + the relative path to fetch data from the full url