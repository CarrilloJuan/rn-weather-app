import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function CustomModal({message, actionText, action, show}) {
  const [isVisible, setIsVisible] = useState(show);
  const closeModal = () => setIsVisible(false);
  return (
    <Modal animationType="slide" visible={isVisible}>
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
