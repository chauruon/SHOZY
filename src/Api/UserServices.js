import { fetchAPI, crashReport } from "./BaseServices";
import { removeAuthenticatedUser, saveAuthenticatedUser, getAuthenticatedUser } from "../Utils/User";

const ERROR_PREFIX = 'Api - UserServices - ';

export function login(user) {
    return new Promise((resolve, reject) => {
        try {
            fetchAPI({
                url: '/login',
                method: 'POST',
                body: {
                    numPhome: user.numPhome,
                    password: user.password,
                },
            }).then(async response => {
                if (!response.success) {
                    console.log(`LOGIN ERROR: ${response.message}`);
                    reject(response);
                    return;
                }
                let authenticatedUser = response.user;
                console.log("asdfasdfsafdf:  "+ authenticatedUser);
                let member = authenticatedUser.member;
                member.user_id = authenticatedUser.id;
                member.token = authenticatedUser.token;
                member.username = user.username;
                member.password = user.password;
                // await saveAuthenticatedUser(member);
                // resolve(member);
            });
        } catch (error) {
            reject(error);
            crashReport(`${ERROR_PREFIX}login`, error.message);
        }
    });
}

export function register(user) {
    return new Promise((resolve, reject) => {
        try {
            fetchAPI({
                url: '/register',
                method: 'POST',
                body: user
                
            }).then(response => {
                if (!response.success) {
                    console.log('REGISTER ERROR: ', response.message);
                    reject(response);
                } else {
                    resolve(response.user);
                }
            });
        } catch (error) {
            reject(error);
            crashReport(`${ERROR_PREFIX}register`, error.message);
        }
    });
}