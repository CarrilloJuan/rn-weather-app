import Config from 'react-native-config';
import {configure} from 'enzyme';

/*
- WEATHERUNIT:
   Temperature is available in Fahrenheit, Celsius and Kelvin units.
   - For temperature in Fahrenheit use units=imperial
   - For temperature in Celsius use units=metric
   - Temperature in Kelvin is used by default, no need to use units parameter in
     API call
- EXCLUDE
   Exclude some parts of the weather data from the API response. (https://openweathermap.org/api/one-call-api)
*/

export default {
  apiUrl: Config.API_URL,
  weatherUnit: 'metric',
  exclude: 'minutely,hourly',
  weatherApiKey: Config.WEATHER_API_URL,
  locationUrl: Config.LOCATION_API_URL,
};
