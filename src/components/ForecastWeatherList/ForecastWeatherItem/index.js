import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

import WeatherIcon from '../../WeatherIcon';
import styles from './styles';

export default function ForecastWeatherDay({day, icon, temp}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <Text style={styles.text}>{day}</Text>
      </View>
      <View style={styles.temp}>
        <WeatherIcon icon={icon} style={styles.weatherIcon} />
        <Text style={styles.text}>{temp}ºC</Text>
      </View>
    </View>
  );
}

ForecastWeatherDay.propTypes = {
  day: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
};
