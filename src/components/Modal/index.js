import React, {useState} from 'react';
import {StyleSheet, View, Text, Modal, TouchableOpacity} from 'react-native';

import Colors from '../../constants/Colors';

export default function CustomModal({message, actionText, action, show}) {
  const [isVisible, setIsVisible] = useState(show);
  const closeModal = () => setIsVisible(false);
  return (
    <Modal
      backdropOpacity={0.6}
      backdropTransitionOutTiming={300}
      animationOutTiming={300}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      animationType="slide"
      visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text style={styles.errorMessage}>{message}</Text>
          <TouchableOpacity
            onPress={() => {
              action();
              return closeModal();
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>{actionText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
