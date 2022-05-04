import dayjs from 'dayjs';

interface ItransactionTime {
  (timestamp: number): string;
}

export const transactionTime: ItransactionTime = (timestamp) =>
  dayjs(timestamp).format('MMM D, YYYY');
