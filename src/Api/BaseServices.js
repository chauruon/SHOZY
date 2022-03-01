import { getAuthenticatedUser } from "../Utils/User";
import { Alert } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import MainConstants from "../Public/MainConstants";
import { showAlert } from "../Utils/Common";

const PREFIX = MainConstants.MainURL;
const VERSION = '/api/v1';

export function fetchAPI({ url, method = 'GET', initHeaders = {}, body = null, authenticate = false }) {
    return new Promise((resolve, reject) => {
        initializeFetch(initHeaders, authenticate).then(headers => {
            if (url.indexOf('http://') == -1 && url.indexOf('https://') == -1) {
                url = url;
            }
            if (body) {
                body = JSON.stringify(body);
            } else {
                body = '';
            }
            let options = {
                method: method,
                headers: headers,
                body: body,
            };
            console.log('FETCH API: ', url);
            fetch(url, options).then(response => {
                if (response.ok != true || response.status != 200) {
                    let responseObj = fetchErrorHandler(response);
                    if (!responseObj) {
                        return response.json();
                    }
                    return responseObj;
                } else {
                    return response.json();
                }
            }).then(responseJson => {
                if (responseJson && responseJson.user_message) {
                    showAlert({ title: 'Thông báo', body: responseJson.user_message, type: 'warning' });
                } else {
                    resolve(responseJson);
                }
            }).catch(error => {
                showAlert({ title: 'Không thể kết nối đến máy chủ', body: 'Vui lòng kiểm tra lại kết nối và thử lại sau', type: 'warning' });
                reject(error);
                crashReport('FETCH API ERROR: ', url + error.message);
            });
        }).catch(error => {
            showAlert({ title: 'Không thể kết nối đến máy chủ', body: 'Vui lòng kiểm tra lại kết nối và thử lại sau', type: 'warning' });
            reject(error);
        });
    });
}

export function initializeFetch(headers, authenticate) {
    try {
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (authenticate) {
                getToken().then(token => {
                    if (token) {
                        headers['Authorization'] = token;
                        resolve(headers);
                    } else {
                        reject('Token is not found');
                    }
                }).catch(error => {
                    console.log('GET TOKEN ERROR: ', error);
                });
            } else {
                resolve(headers);
            }
        });
    } catch (error) {
        console.log(`INITIALIZE FETCH ERROR: ${error.message}`);
    }
}

function getToken() {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await getAuthenticatedUser();
            if (user) {
                var bearer_token = 'Bearer ' + user.token;
                resolve(bearer_token);
            } else {
                reject(false);
            }
        } catch (error) {
            reject(error);
        }
    });
}

export function crashReport(route, message) {
    try {
        if (__DEV__) {
            Alert.alert(route, message);
        } else {
            let phoneInfo = '';
            let systemName = DeviceInfo.getSystemName();
            let systemVersion = DeviceInfo.getSystemVersion();
            let brand = DeviceInfo.getBrand();
            let version = DeviceInfo.getVersion();
            DeviceInfo.getBuildId().then(buildId => {
                phoneInfo = brand.toUpperCase() + ' - ' + systemName + ' ' + systemVersion +
                    ' - ' + buildId + ' - App Version: ' + version + ' - Mô tả lỗi: ';
                fetchAPI({
                    url: '/auth/crashreport',
                    method: 'POST',
                    body: {
                        function_name: route,
                        content: phoneInfo + message,
                    }
                }).then(response => {
                    if (response.success) {
                        Alert.alert('Rất tiếc! Đã xảy ra lỗi.', 'Lỗi đã được báo cáo lên hệ thống. Chúng tôi sẽ khắc phục sớm');
                    }
                });
            });
        }
    } catch (error) {

    }
}

export function fetchErrorHandler(error) {
    try {
        let responseObj = {
            success: false,
            buttons: [],
            user_message: '',
        };
        if (error.status == 408) {
            responseObj.user_message = 'Không tìm thấy kết nối internet, vui lòng kiểm tra và thử lại sau.';
        } else if (error.status == 413) {
            responseObj.user_message = 'Dung lượng tệp quá lớn, vui lòng chọn tệp khác.';
        } else if (error.status == 401) {
            responseObj.user_message = 'Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại để tiếp tục.';
        } else {
            return null;
        }
        return responseObj;
    } catch (error) {

    }
}
