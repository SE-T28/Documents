import axios from 'axios';

const BaseURL = './../';

const init = axios.create({
    BaseURL,
    headers: {
        Authorization:
            localStorage.getItem('token')
}});

export default init;