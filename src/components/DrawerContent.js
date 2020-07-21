import React from 'react';
import {useDispatch} from 'react-redux';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {FlatList, View, StyleSheet} from 'react-native';

import CityItem from './CityItem';
import {fetchWeatherByCity} from '../redux/weatherSlice';
import config from '../config';

const cities = config.defaultCities;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
  },
});

export default function DrawerContent(props) {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Other locations" />
      <View style={styles.container}>
        <FlatList
          data={cities}
          renderItem={({item}) => (
            <CityItem
              {...item}
              fetcheWeather={(cityId) => dispatch(fetchWeatherByCity(cityId))}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </DrawerContentScrollView>
  );
}
