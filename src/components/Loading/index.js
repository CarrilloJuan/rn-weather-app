import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default function Loading({size = 'large'}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
