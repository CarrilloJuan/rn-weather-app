import React from 'react';
import {useDispatch} from 'react-redux';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {fetchWeather} from '../../store/weatherSlice';
import SelectableCities from './SelectableCities';
import config from '../../config';

const selectableCities = config.defaultCities;

export default function DrawerContent(props) {
  const dispatch = useDispatch();
  return (
    selectableCities && (
      <DrawerContentScrollView {...props}>
        <DrawerItem label="Home" onPress={() => dispatch(fetchWeather())} />
        <DrawerItem label="Other locations" />
        <SelectableCities cities={selectableCities} />
      </DrawerContentScrollView>
    )
  );
}
