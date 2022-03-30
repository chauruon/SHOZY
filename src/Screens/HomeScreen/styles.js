import {StyleSheet, Dimensions} from 'react-native';
import MainStyles from "../../Public/MainStyles"

const styles = StyleSheet.create({
  container: {
    ...MainStyles.card,
    paddingVertical: 0,
    marginVertical: 7.5,
    width:width,
    height:height,
    backgroundColor:"#1273de"
    // marginHorizontal: 20,
},
  slogan: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
  },
  filter_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'95%',
    marginLeft:10,
  },
  cart_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:5,
    width:'95%',
    marginLeft:10
  },
  search_view: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 10,
  },
  icon_search: {
    marginLeft: 10,
  },
  input_search: {
    flex: 1,
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default styles;
