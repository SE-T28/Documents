import axios from 'axios';

const BaseURL = 'localhost:8080';

const init = axios.create({
    BaseURL,
    headers: {
        authorization:
            localStorage.getItem('token')
}});

export default init;