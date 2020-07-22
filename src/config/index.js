import Config from 'react-native-config';

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
  weatherApiKey: Config.WEATHER_API_KEY,
  locationUrl: Config.LOCATION_API_URL,
  defaultCities: [
    {cityName: 'Caracas', id: '3646738'},
    {cityName: 'Bogota', id: '3675707'},
    {cityName: 'Chicago', id: '4125402'},
    {cityName: 'Tokyo', id: '5138113'},
    {cityName: 'Paris', id: '6455259'},
  ],
};
