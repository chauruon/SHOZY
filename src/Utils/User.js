import AsyncStorage from '@react-native-async-storage/async-storage';
import MainConstants from '../Public/MainConstants'

export async function saveAuthenticatedUser(user) {
    try {
        await AsyncStorage.setItem(MainConstants.AuthenticatedUserStorageName, JSON.stringify(user));
        return true;
    } catch (error) {
        return false;
    }
}

export async function getAuthenticatedUser() {
    try {
        const user = await AsyncStorage.getItem(MainConstants.AuthenticatedUserStorageName);
        return user != null ? JSON.parse(user) : null;
    } catch (error) {
        
    }
}

export async function removeAuthenticatedUser() {
    await AsyncStorage.removeItem(MainConstants.AuthenticatedUserStorageName);
    return true;
}