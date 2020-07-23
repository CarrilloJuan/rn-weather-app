import React from 'react';
import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

import WeatherIcon from '../WeatherIcon';
import styles from './styles';

export default function CurrentWeather() {
  const {location, currentWeather} = useSelector(({location, weather}) => ({
    location,
    currentWeather: weather.data.current,
  }));

  const {temp, description, icon} = currentWeather || {};
  const city = location.selectedCity || location.locationInfo.city;

  return (
    currentWeather && (
      <View style={styles.container}>
        <WeatherIcon icon={icon} />
        <View style={styles.tempContainer}>
          <Text style={styles.temp}>{temp}</Text>
          <Text style={styles.degrees}>ºC</Text>
        </View>
        <Text style={styles.city} testID="weather-city">
          {city}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    )
  );
}

CurrentWeather.propTypes = {
  temp: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};
