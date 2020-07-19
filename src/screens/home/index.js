import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';

import {Header} from '../../components';

import {ForecastWeatherList} from '../../components';

export default function Home() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.body}>
          <ForecastWeatherList />
        </View>
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
