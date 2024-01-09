import axios from 'axios';
import { APIs_URL } from '../utils/constants/app-constants'

const instance = axios.create({
    baseURL: APIs_URL.DEV,
});

instance.interceptors.request.use(config => {
    return config;
});

instance.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
    }
    return Promise.reject(error);
});

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance;
