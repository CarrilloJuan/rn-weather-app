import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  temp: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
    color: Colors.black,
  },
  weatherIcon: {
    height: 50,
    width: 50,
  },
});
