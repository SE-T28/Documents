import axios from 'axios';

const BaseURL = 'localhost:8080';

const init = axios.create({
    BaseURL,
    headers: {
        Authorization:
            localStorage.getItem('token')
}});

export default init;