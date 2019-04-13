export default class Api {

    static get(relativePath) {
        return fetch(this.BASE_URL + relativePath);
    }
}

Api.BASE_URL = 'https://my-json-server.typicode.com/ahmostafa91/AnnouncmentService';