import React from 'react';
import {StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';

const weatherIconUrl = 'http://openweathermap.org/img/wn/';

export default function WeatherIcon({icon, style}) {
  return (
    <Image
      source={{uri: `${weatherIconUrl}${icon}@2x.png`}}
      style={[styles.weatherIcon, style]}
    />
  );
}

WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  weatherIcon: {
    height: 90,
    width: 90,
  },
});
