import Api from './Api';

export default class Announcement extends Api {


    static getAllAnnouncements() {
        return super.get('/announcment').then(res => res.json())
    }
}

// this api ready to pass the path to main url to fetch the announcment data then import it and using it in components