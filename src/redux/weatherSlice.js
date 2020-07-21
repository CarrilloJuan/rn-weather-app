import {createSlice} from '@reduxjs/toolkit';
import api from '../services/weatherApi';
import {getDayFromUnixTime} from '../utils';

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

const getWeatherProps = ({current, daily}) => {
  const {temp, weather} = current;
  const {description, icon} = weather[0] || {};
  const forecast = daily.slice(1, 6).reduce((acc, i) => {
    return [
      {
        day: getDayFromUnixTime(i.dt),
        temp: `${Math.trunc(i.temp.min)}/${Math.trunc(i.temp.max)}`,
        icon: i.weather[0].icon,
      },
      ...acc,
    ];
  }, []);
  return {
    current: {temp, description, icon},
    forecast,
  };
};

// Define a thunk that dispatches the action creators
export const fetchWeather = () => async (dispatch, getState) => {
  dispatch(fetchWeatherStart());
  const {location: loc} = getState().location;
  const {data} = await api.get('onecall?', {
    params: {
      lat: loc.latitude,
      lon: loc.longitude,
    },
  });
  const weatherData = getWeatherProps(data);
  dispatch(fetchWeatherSuccess(weatherData));
  try {
  } catch (error) {
    console.log(error);
    dispatch(fetchWeatherFailure);
  }
};

// Export the reducer, either as a default or named export
export default reducer;
