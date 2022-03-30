import { StyleSheet } from 'react-native';
import MainConstants from './MainConstants';

const MainStyles = StyleSheet.create({
    button: {
        textAlign: 'center',
        padding: 10,
        borderRadius: 7.5,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    smallButton: {
        textAlign: 'center',
        padding: 5,
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    roundButton: {
        borderRadius: 20,
    },
    primaryButton: {
        backgroundColor: MainConstants.PrimaryColor,
        borderColor: MainConstants.PrimaryColor,
    },
    successButton: {
        backgroundColor: MainConstants.SuccessColor,
        borderColor: MainConstants.SuccessColor,
    },
    warningButton: {
        backgroundColor: MainConstants.WarningColor,
        borderColor: MainConstants.WarningColor,
    },
    dangerButton: {
        backgroundColor: MainConstants.DangerColor,
        borderColor: MainConstants.DangerColor,
    },
    disableButton: {
        backgroundColor: MainConstants.DisableColor,
        borderColor: MainConstants.DisableColor,
    },
    secondaryButton: {
        backgroundColor: '#6c757d',
        borderColor: '#6c757d',
    },
    mainButton: {
        backgroundColor: MainConstants.PurpleColor1,
        borderColor: MainConstants.PurpleColor1,
    },
    whiteText: {
        color: 'white',
        fontSize: 14,
    },
    card: {
        shadowOffset: { width: 0, height: 1 },
        shadowColor: '#ccc',
        shadowOpacity: 0.9,
        shadowRadius: 7.5,
        elevation: 2,

        backgroundColor: 'white',
        marginHorizontal:5,
        justifyContent: 'center',
    },
});

export default MainStyles;
