import {combineReducers} from 'redux';
import weatherReducer from './weatherSlice';
import locationReducer from './locationSlice';

export default combineReducers({
  weather: weatherReducer,
  location: locationReducer,
});
