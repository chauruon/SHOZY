import { DeviceEventEmitter } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { crashReport } from '../Api/BaseServices';

const ERROR_PREFIX = 'Utils - Common ';

export function showAlert({ title, body, type = 'success', buttons = [] }) {
    try {
        DeviceEventEmitter.emit('showAlert', {
            title: title,
            body: body,
            type: type,
            buttons: buttons,
        });
    } catch (error) {
        crashReport(`${ERROR_PREFIX}showAlert`, error.message);
    }
}

export function resetNavigation({ navigation, route, params = {} }) {
    try {
        navigation.reset({
            routes: [{ name: route }],
        });
    } catch (error) {
        crashReport(`${ERROR_PREFIX}resetNavigation`, error.message);
    }
}

export function formatPrice(amount, decimalCount = 0) {
    try {
        let decimal = ',';
        let thousands = '.';
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? '-' : '';

        let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
        let j = i.length > 3 ? i.length % 3 : 0;

        return (
            negativeSign +
            (j ? i.substr(0, j) + thousands : '') +
            i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
            (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '') +
            '₫'
        );
    } catch (error) {
        crashReport(`${ERROR_PREFIX}formatPrice`, error.message);
    }
}

export function readPrice(num) {
    if (!num) return '';
    let temp = '';

    //length <= 18
    while (num.length < 18) {
        num = '0' + num;
    }

    let g1 = num.substring(0, 3);
    let g2 = num.substring(3, 6);
    let g3 = num.substring(6, 9);
    let g4 = num.substring(9, 12);
    let g5 = num.substring(12, 15);
    let g6 = num.substring(15, 18);

    //read group1 ---------------------
    if (g1 !== '000') {
        temp = readGroup(g1);
        temp += ' Triệu';
    }
    //read group2-----------------------
    if (g2 !== '000') {
        temp += readGroup(g2);
        temp += ' Nghìn';
    }
    //read group3 ---------------------
    if (g3 !== '000') {
        temp += readGroup(g3);
        temp += ' Tỷ';
    } else if (temp !== '') {
        temp += ' Tỷ';
    }

    //read group2-----------------------
    if (g4 !== '000') {
        temp += readGroup(g4);
        temp += ' Triệu';
    }
    //---------------------------------
    if (g5 !== '000') {
        temp += readGroup(g5);
        temp += ' Nghìn';
    }
    //-----------------------------------

    temp = temp + readGroup(g6);
    //---------------------------------
    // Refine
    temp = temp.split('Một Mươi').join('Mười');
    temp = temp.trim();
    temp = temp.split('Không Trăm').join('');
    // if (temp.indexOf('Không Trăm') == 0) temp = temp.substring(10);
    temp = temp.trim();
    temp = temp.split('Mười Không').join('Mười');
    temp = temp.trim();
    temp = temp.split('Mươi Không').join('Mươi');
    temp = temp.trim();
    if (temp.indexOf('Lẻ') == 0) temp = temp.substring(2);
    temp = temp.trim();
    temp = temp.split('Mươi Một').join('Mươi Mốt');
    temp = temp.trim();

    //Change Case
    return temp.substring(0, 1).toUpperCase() + temp.substring(1).toLowerCase() + ' đồng.';
}

function readGroup(group) {
    let readDigit = [' Không', ' Một', ' Hai', ' Ba', ' Bốn', ' Năm', ' Sáu', ' Bảy', ' Tám', ' Chín'];
    let temp = '';
    if (group == '000') return '';
    //read number hundreds
    temp = readDigit[parseInt(group.substring(0, 1))] + ' Trăm';
    //read number tens
    if (group.substring(1, 2) == '0') {
        if (group.substring(2, 3) == '0') return temp;
        else {
            temp += ' Lẻ' + readDigit[parseInt(group.substring(2, 3))];
            return temp;
        }
    }
    else {
        temp += readDigit[parseInt(group.substring(1, 2))] + ' Mươi';
    }
    //read number

    if (group.substring(2, 3) == '5') temp += ' Lăm';
    else if (group.substring(2, 3) != '0') temp += readDigit[parseInt(group.substring(2, 3))];
    return temp;
}