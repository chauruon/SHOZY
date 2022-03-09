import { StyleSheet, Dimensions } from 'react-native';
import MainConstants from '../../../../Public/MainConstants';

const screen = Dimensions.get("screen") / 2;
const window = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    viewall:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#082d3e',
    },
    acction: {
        borderWidth: 1,
        borderRadius: 7,
        borderColor:'#646464',
    },
    header:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleWellcome:{
        flex:3,
        fontSize: 27,
        color: '#ffffff',
        alignItems: 'flex-end', 
        fontWeight: 'bold',
        marginBottom: 6,
    },
    titleLogin:{
        flex:3,
        fontSize: 27,
        alignItems: 'center', 
        fontWeight: 'bold',
        height: 50,
    },
    footer: {
        flex: 2,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 40,
        borderTopRightRadius:40,
        paddingVertical:90,
    },
    userinfo: {
        flexDirection: 'row',
        paddingHorizontal:20,
    },
    remember: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 15,
        alignItems:'flex-start',
    },
    forgotpass: {
        flex: 1,
        alignItems:'flex-end',
        marginVertical: 15,
    },
    textNote: {
        fontSize: 18,
        color:MainConstants.ColorPrussianBlue,
        marginTop:3,
    },
    textRemember: {
        fontSize: 18,
        color:MainConstants.ColorPrussianBlue,
    },
    button:{
        paddingHorizontal: 60,
    },
    btnLogin:{
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: MainConstants.ColorBlueWhale,
        height:50,
    },
    textBtnLogin:{
        fontSize: 18,
        color: MainConstants.ColorWhite,
        marginTop:10
    },
    textDontHaveAccoutn:{
        fontSize: 18,
        color: MainConstants.ColorBlueWhale,
        marginTop:8
    },
});

export default styles;
