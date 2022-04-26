import { fetchAPI, crashReport } from "./BaseServices";

const ERROR_PREFIX = 'API - News - ';


export function getPro() {
    return new Promise((resolve, reject) => {
        try {
            fetchAPI({ url: `/getPro` }).then((response)=>{
                // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" + JSON.stringify(response));
                if (!response.status === true) {
                    console.log(`GET PRODUCT ERROR: ${response.message}`);
                    reject(response);
                    return;
                }
                resolve(response);
                console.log(`getPro : ${JSON.stringify(response)}`);
            });
        } catch (error) {
            crashReport(`${ERROR_PREFIX}getPro`, error.message);
            reject(error);
            throw error;
        }
    });
}

export function Cart(id) {
    return new Promise((resolve, reject) => {
        try {
            let cart = {
                id: id,
            }
            fetchAPI({
                url: '/toCart',
                method: 'POST',
                body: cart
            }).then(response => {
                console.log("response: "+ JSON.stringify(response));
                if (!response.status == true) {
                    console.log('API SHOPPING CART ERROR: ', response.message);
                    reject(response);
                } else {
                    console.log(`API SHOPPING CART DATA: ${JSON.stringify(response.data)}`);
                    resolve(response.data);
                }
            });
        } catch (error) {
            reject(error);
            crashReport(`${ERROR_PREFIX}login`, error.message);
        }
    });
}

export function getToCart() {
    return new Promise((resolve, reject) => {
        try {
            fetchAPI({ url: `/getToCart` }).then((response)=>{
                // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" + JSON.stringify(response));
                if (!response.status === true) {
                    console.log(`GET TO CART ERROR: ${response.message}`);
                    reject(response);
                    return;
                }
                resolve(response);
                console.log(`getToCart : ${JSON.stringify(response)}`);
            });
        } catch (error) {
            crashReport(`${ERROR_PREFIX}getToCart`, error.message);
            reject(error);
            throw error;
        }
    });
}