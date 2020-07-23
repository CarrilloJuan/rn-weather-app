import React, {useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import {Header, ForecastWeatherList, Loading, Modal} from '../../components';

import {fetchWeather} from '../../store/weatherSlice';
import {fetchLocation} from '../../store/locationSlice';
import translation from '../../services/translations';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocation());
  }, []);

  const state = useSelector(
    ({location, weather}) => ({
      location: location.locationInfo,
      error: location.error || weather.error,
      weather,
    }),
    shallowEqual,
  );
  const {location, weather, error} = state;

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    dispatch(fetchWeather());
  }, [location]);

  const isCurrentWeatherReady = weather.success && !weather.loading;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {isCurrentWeatherReady ? (
          <>
            <Header />
            <View style={styles.body}>
              <ForecastWeatherList />
            </View>
          </>
        ) : (
          <Loading />
        )}
        {error && (
          <Modal
            message={error.msg}
            actionText={translation.modalCtaText}
            action={() =>
              error.key === 'getLocationError'
                ? dispatch(fetchLocation())
                : dispatch(fetchWeather())
            }
            show
          />
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
