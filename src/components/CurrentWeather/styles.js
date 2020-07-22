import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 44,
    fontWeight: '800',
  },
  degrees: {
    fontSize: 16,
  },
  city: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  description: {
    fontSize: 16,
    color: Colors.black,
  },
});
