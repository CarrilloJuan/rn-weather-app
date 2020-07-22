import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

import Colors from '../../constants/Colors';
import backgroundImage from '../../../assets/images/headerImage.jpg';
import CurrentWeather from '../CurrentWeather';

export default function Header() {
  return (
    <ImageBackground
      accessibilityRole={'image'}
      source={backgroundImage}
      style={styles.background}
      imageStyle={styles.img}>
      <CurrentWeather />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lighter,
    height: 300,
  },
  img: {
    opacity: 0.8,
    overflow: 'visible',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});
