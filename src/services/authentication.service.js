import {
    BehaviorSubject
} from 'rxjs';
import {
    AES, enc
} from 'crypto-js';
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
    encryptPassword,
    deEncryptedPassword,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value
    },
    get isAuthorized() {
        if (currentUserSubject.value && !document.body.classList.contains("authorized")) {
            document.body.classList.add("authorized");
        }
        return currentUserSubject.value ? true : false;
    }
};

function login(username, password) {
    return requestAPI.request(requestOptions.post(`/api/login`, {
            username,
            password: encryptPassword(password)
        }))
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            addClass();
            return user;
        });
}

function encryptPassword(password) {
    return AES.encrypt(password, environment.encrypt_key).toString()
}

function deEncryptedPassword(password) {
    const bytes = AES.decrypt(password, environment.encrypt_key);
    return bytes.toString(enc.Utf8);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
    removeClass();
}

function addClass() {
    if (document.body.classList.contains("un-authorized")) {
        document.body.classList.remove("un-authorized");
    }
    if (!document.body.classList.contains("authorized")) {
        document.body.classList.add("authorized");
    }
}

function removeClass() {
    if (!document.body.classList.contains("un-authorized")) {
        document.body.classList.add("un-authorized");
    }
    if (document.body.classList.contains("authorized")) {
        document.body.classList.remove("authorized");
    }
}