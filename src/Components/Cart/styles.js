import { StyleSheet, Dimensions } from 'react-native';
// import MainConstants from '../../../../Public/MainConstants';

const screen = Dimensions.get("screen") / 2;
const window = Dimensions.get("window");

const styles = StyleSheet.create({
    item: {
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60,
        marginRight: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    message: {
        color: 'gray',
        fontSize: 14,
        marginTop: 3,
    },
    rightAction:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 75,
    },
});

export default styles;