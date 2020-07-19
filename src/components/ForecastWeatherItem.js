import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';
import Colors from '../constants/Colors';

export default function ForecastWeatherDay({
  day = 'Mon',
  icon = '10d',
  temp = '26º/12ºC',
}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <Text style={styles.text}>{day}</Text>
      </View>
      <View style={styles.temp}>
        <WeatherIcon icon={icon} style={styles.weatherIcon} />
        <Text style={styles.text}>{temp}</Text>
      </View>
    </View>
  );
}

ForecastWeatherDay.propTypes = {
  day: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
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
