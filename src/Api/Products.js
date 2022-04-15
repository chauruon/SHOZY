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

export function Cart(post) {
    console.log(post);
    return new Promise((resolve, reject) => {
        try {
            const {id} = post;
            let body = {
                id: id,
            }
            fetchAPI({
                url: '/toCart',
                method: 'POST',
                body: body
                
            }).then(response => {
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
