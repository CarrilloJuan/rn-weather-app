import React, {useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import {Header, ForecastWeatherList, Loading} from '../../components';

import {fetchWeather} from '../../redux/weatherSlice';
import {fetchLocation} from '../../redux/locationSlice';

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector(
    ({location, weather}) => ({
      location: location.location,
      isWeatherLoading: weather.loading,
      forecast: weather.data.forecast,
    }),
    shallowEqual,
  );
  const {location, isWeatherLoading, forecast} = state;
  useEffect(() => {
    dispatch(fetchLocation());
  }, []);
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    dispatch(fetchWeather());
  }, [location]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {location && !isWeatherLoading ? (
          <>
            <Header />
            <View style={styles.body}>
              <ForecastWeatherList weatherData={forecast} />
            </View>
          </>
        ) : (
          <Loading />
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  body: {
    marginTop: 32,
    flex: 1,
  },
});
