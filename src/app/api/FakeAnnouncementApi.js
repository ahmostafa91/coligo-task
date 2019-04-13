import Api from './Api';

export default class Announcement extends Api {


    static getAllAnnouncements() {
        return super.get('/announcment').then(res => res.json())
    }
}