import React from 'react';
import {FlatList} from 'react-native';
import {useSelector, shallowEqual} from 'react-redux';

import ForecastWeatherItem from './ForecastWeatherItem';

export default function ForecastWeather() {
  const {forecast} = useSelector(
    ({weather}) => ({
      forecast: weather.data.forecast,
    }),
    shallowEqual,
  );
  const renderItem = ({item}) => <ForecastWeatherItem {...item} />;
  return (
    <FlatList
      data={forecast}
      renderItem={renderItem}
      keyExtractor={(item) => item.day}
    />
  );
}
