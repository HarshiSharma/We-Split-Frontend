import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8080"
});

//instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;