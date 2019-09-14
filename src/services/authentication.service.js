import {
    BehaviorSubject
} from 'rxjs';
import { AES } from 'crypto-js';
import {
    requestOptions,
    requestAPI
} from '../helpers';
import {
    environment
} from '../config';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value
    },
    get isAuthorized() {
        return currentUserSubject.value ? true : false;
    }
};

function login(username, password) {
    return requestAPI.request(requestOptions.post(`/api/login`, {
            username,
            password: AES.encrypt(password, environment.encrypt_key).toString()
        }))
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}
