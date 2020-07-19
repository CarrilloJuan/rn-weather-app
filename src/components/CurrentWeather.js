import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';
import WeatherIcon from './WeatherIcon';

export default function CurrentWeather({
  currentTemp = '10',
  city = 'Buenos Aires',
  weatherDescription = 'shower rain',
  icon = '10d',
}) {
  return (
    <View style={styles.container}>
      <WeatherIcon icon={icon} />
      <View style={styles.tempContainer}>
        <Text style={styles.temp} testID="current-weather-temp">
          {currentTemp}
        </Text>
        <Text style={styles.degrees}>ºC</Text>
      </View>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.description}>{weatherDescription}</Text>
    </View>
  );
}

CurrentWeather.propTypes = {
  currentTemp: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  weatherDescription: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
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
