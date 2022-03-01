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