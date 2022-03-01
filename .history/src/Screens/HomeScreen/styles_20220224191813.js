import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('screen') / 2;
const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
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
