import axios from 'axios';

const KEY = 'AIzaSyAkUigfMFCGSG75_nZg87nUsFav3QbnUeA'

// creating an axios instance
// going to pass in query string when we actually make use of this method
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

