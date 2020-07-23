import React from 'react';
import {useDispatch} from 'react-redux';
import {DrawerItem} from '@react-navigation/drawer';
import {FlatList, View, StyleSheet} from 'react-native';

import {fetchWeatherByCity} from '../../../store/weatherSlice';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
  },
});

const renderItem = (item, dispatch) => (
  <DrawerItem
    testID="city-item"
    label={item.cityName}
    onPress={() => dispatch(fetchWeatherByCity(item))}
  />
);

export default function SelectableCities({cities}) {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        renderItem={({item}) => renderItem(item, dispatch)}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}
