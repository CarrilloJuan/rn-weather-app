import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default function CityItem({cityName, id, fetcheWeather}) {
  return (
    <TouchableOpacity onPress={() => fetcheWeather(id)}>
      <Text style={styles.text}>{cityName}</Text>
    </TouchableOpacity>
  );
}
