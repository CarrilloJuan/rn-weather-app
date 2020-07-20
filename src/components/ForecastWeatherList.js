import React from 'react';
import {FlatList} from 'react-native';
import ForecastWeatherItem from './ForecastWeatherItem';

export default function ForecastWeather({weatherData}) {
  const renderItem = ({item}) => <ForecastWeatherItem {...item} />;
  return (
    <FlatList
      data={weatherData}
      renderItem={renderItem}
      keyExtractor={(item) => item.day}
    />
  );
}
