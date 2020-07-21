import axios from 'axios';
import config from '../config';

export const getLocation = async () => {
  const {data} = await axios.get(config.locationUrl);
  const {latitude, longitude} = data;
  return {
    lat: latitude,
    lon: longitude,
  };
};
