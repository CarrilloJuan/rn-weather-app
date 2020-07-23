import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  background: {
    backgroundColor: Colors.lighter,
    height: 300,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    opacity: 0.8,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 8,
    marginRight: 16,
  },
});
