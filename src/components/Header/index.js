import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Colors from '../../constants/Colors';
import backgroundImage from '../../../assets/images/headerImage.jpg';
import CurrentWeather from '../CurrentWeather';
import styles from './styles';

export default function Header() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      accessibilityRole={'image'}
      source={backgroundImage}
      style={styles.background}
      imageStyle={styles.img}
    >
      <View styles={styles.container}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu" size={30} color={Colors.dark} />
          </TouchableOpacity>
        </View>

        <CurrentWeather />
      </View>
    </ImageBackground>
  );
}
