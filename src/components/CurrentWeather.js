import React from 'react';
import {useSelector} from 'react-redux';
import {Text, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';
import WeatherIcon from './WeatherIcon';

export default function CurrentWeather() {
  const {location, currentWeather} = useSelector(({location, weather}) => ({
    location,
    currentWeather: weather.data.current,
  }));
  const {temp, description, icon} = currentWeather || {};
  const city = location.selectedCity || location.locationInfo.city;
  return (
    <View style={styles.container}>
      <WeatherIcon icon={icon} />
      <View style={styles.tempContainer}>
        <Text style={styles.temp} testID="current-weather-temp">
          {temp}
        </Text>
        <Text style={styles.degrees}>ºC</Text>
      </View>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

CurrentWeather.propTypes = {
  temp: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string,
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
