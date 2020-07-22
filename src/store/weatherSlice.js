import {createSlice} from '@reduxjs/toolkit';
import api from '../services/weatherApi';
import {getDayFromUnixTime} from '../utils';
import {setLocationCity} from './locationSlice';

const initialState = {
  data: '',
  loading: false,
  error: false,
  success: false,
};

/*
  createSlice uses immer to let you write reducers as if they were mutating the state directly.
  In reality, the reducer receives a proxy state that translates all mutations into equivalent copy operations
  https://redux-toolkit.js.org/api/createSlice
*/

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.success = true;
    },
    fetchWeatherFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Extract the action creators object and the reducer
const {actions, reducer} = weatherSlice;

// Extract and export each action creator by name
export const {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} = actions;

const formatWeatherProps = ({current, daily}) => {
  const {temp, weather} = current;
  const {description, icon} = weather[0] || {};
  let forecast = daily.slice(1, 6).reduce((acc, i) => {
    return [
      {
        id: i.dt,
        day: getDayFromUnixTime(i.dt),
        temp: `${Math.trunc(i.temp.min)}/${Math.trunc(i.temp.max)}`,
        icon: i.weather[0].icon,
      },
      ...acc,
    ];
  }, []);
  forecast = forecast.sort((a, b) => a.id - b.id);
  return {
    current: {temp, description, icon},
    forecast,
  };
};

// Define a thunk that dispatches the action creators
export const fetchWeather = () => async (dispatch, getState) => {
  try {
    dispatch(fetchWeatherStart());
    const {locationInfo} = getState().location;
    const {data} = await api.get('onecall?', {
      params: {
        lat: locationInfo.latitude,
        lon: locationInfo.longitude,
      },
    });
    dispatch(setLocationCity(null));
    const weatherData = formatWeatherProps(data);
    dispatch(fetchWeatherSuccess(weatherData));
  } catch (error) {
    console.log(error);
    dispatch(fetchWeatherFailure());
  }
};

export const fetchWeatherByCity = ({id, cityName}) => async (dispatch) => {
  try {
    dispatch(fetchWeatherStart());
    const {data} = await api.get('weather?', {
      params: {
        id,
      },
    });
    const coordinates = data.coord;
    const {data: weatherData} = await api.get('onecall?', {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lon,
      },
    });
    dispatch(setLocationCity(cityName));
    const weatherDataFormated = formatWeatherProps(weatherData);
    dispatch(fetchWeatherSuccess(weatherDataFormated));
  } catch (error) {
    console.log(error);
    dispatch(fetchWeatherFailure());
  }
};

// Export the reducer, either as a default or named export
export default reducer;
