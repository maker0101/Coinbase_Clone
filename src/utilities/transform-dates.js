import dayjs from 'dayjs';

export const transactionTime = (timestamp) =>
  dayjs(timestamp).format('MMM D, YYYY');
