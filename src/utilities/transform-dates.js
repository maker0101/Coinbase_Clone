import { MONTHS_OF_YEAR } from '../constants/months-of-year';

/**
 * Create date string with month, day, year
 * @param {string} timestamp - e.g. '2022-01-25'
 * @returns {string} - e.g. 'Jan 25, 2021'
 */
export const timestampToMonthDayYear = (timestamp) => {
  const dateObject = new Date(timestamp);
  const day = dateObject.getDate();
  const month = MONTHS_OF_YEAR[dateObject.getMonth()];
  const year = dateObject.getFullYear();
  return `${month} ${day}, ${year}`;
};
