import React from 'react';
import {FlatList} from 'react-native';
import ForecastWeatherItem from './ForecastWeatherItem';

const forecastMock = [
  {
    day: 'Mon',
    icon: '01d',
    temp: '26º/12ºC',
  },
  {
    day: 'Tue',
    icon: '03d',
    temp: '27º/11ºC',
  },
  {
    day: 'Wed',
    icon: '02d',
    temp: '26º/14ºC',
  },
  {
    day: 'Thu',
    icon: '10d',
    temp: '23º/12ºC',
  },
  {
    day: 'Fri',
    icon: '10d',
    temp: '15º/9ºC',
  },
];

export default function ForecastWeather() {
  const renderItem = ({item}) => <ForecastWeatherItem {...item} />;

  return (
    <FlatList
      data={forecastMock}
      renderItem={renderItem}
      keyExtractor={(item) => item.day}
    />
  );
}
