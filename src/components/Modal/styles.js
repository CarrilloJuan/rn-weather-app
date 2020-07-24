import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backdrop,
  },
  modalView: {
    minHeight: 200,
    minWidth: 200,
    backgroundColor: Colors.white,
    borderRadius: 5,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 4,
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: Colors.light,
  },
  errorMessage: {
    fontSize: 16,
    marginBottom: 16,
    color: Colors.error,
  },
});
