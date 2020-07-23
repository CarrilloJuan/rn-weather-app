import {format, fromUnixTime} from 'date-fns';

/* Return the day as string from the unix time */
export const getDayFromUnixTime = (t) => {
  const date = fromUnixTime(t);
  return format(date, 'eeeeee');
};
