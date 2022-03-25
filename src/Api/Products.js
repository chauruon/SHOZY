import { fetchAPI, crashReport } from "./BaseServices";

const ERROR_PREFIX = 'API - News - ';


export function getPro() {
    return new Promise((resolve, reject) => {
        try {
            fetchAPI({ url: `/getPro` }).then(response => {
                if (!response.status === true) {
                    console.log(`GET PRODUCT ERROR: ${response.message}`);
                    reject(response);
                    return;
                }
                resolve(response);
                // console.log(`getPro : ${JSON.stringify(response)}`);
            });
        } catch (error) {
            crashReport(`${ERROR_PREFIX}getPro`, error.message);
            reject(error);
        }
    });
}