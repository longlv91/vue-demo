import axios from "axios";
import {
    environment
} from '../config';
import {
    authenticationService
} from "../services";
import router from '../router';

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: environment.apiUrl,
    timeout: 1000
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const currentUser = authenticationService.currentUserValue || {};
    const authHeader = currentUser.access_token ? {
        'Authorization': 'Bearer ' + currentUser.access_token
    } : {};
    config.headers = {
        ...authHeader,
        'Content-Type': 'application/json'
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        if ([401, 403].indexOf(error.response.status) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            authenticationService.logout();
            // location.reload(true);
            router.push({
                path: "/pages/authentication/login"
            })
        }
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.log(error.config);
    return Promise.reject(error);
});

export const requestAPI = {
    request(requestOption) {
        return instance.request(requestOption);
    }
}