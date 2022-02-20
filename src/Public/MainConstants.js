import { Platform } from 'react-native';
// import DeviceInfo from 'react-native-device-info';

const PREFIX_NAME = 'ANZBDS';
const MainConstants = {
    ColorBlueWhale : '#082d3e',
    ColorWhite: '#ffffff',
    ColorPrussianBlue:'#05375a',
    SizeText : 18,
    
    AuthenticatedUserStorageName: `${PREFIX_NAME}AuthenticatedUser`,
    CitiesStorageName: `${PREFIX_NAME}Cities`,
    DistrictsStorageName: `${PREFIX_NAME}Districts`,
    WardsStorageName: `${PREFIX_NAME}Wards`,

    HeaderHeight: Platform.OS == 'ios' ? (DeviceInfo.hasNotch() ? 90 : 70) : 50,
    FCMTopicPrefix: 'anzbds_',
};

export default MainConstants;
