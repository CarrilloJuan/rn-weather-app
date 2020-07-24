import React from 'react';
import {ImageBackground, View} from 'react-native';

import backgroundImage from '../../../assets/images/headerImage.jpg';
import CurrentWeather from '../CurrentWeather';
import styles from './styles';
import MenuButton from './MenuButton';

export default function Header() {
  return (
    <ImageBackground
      accessibilityRole={'image'}
      source={backgroundImage}
      style={styles.background}
      imageStyle={styles.img}>
      <View styles={styles.container}>
        <View style={styles.menu}>
          <MenuButton />
        </View>
        <CurrentWeather />
      </View>
    </ImageBackground>
  );
}
