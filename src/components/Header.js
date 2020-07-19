import React from 'react';
import {Text, StyleSheet, ImageBackground, View} from 'react-native';
import Colors from '../constants/Colors';
import logo from '../../assets/images/logo.png';

const Header = () => (
  <ImageBackground
    accessibilityRole={'image'}
    source={logo}
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.text}>Welcome to weather App</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lighter,
    height: 300,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default Header;
