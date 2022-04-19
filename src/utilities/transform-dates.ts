import dayjs from 'dayjs';

interface TransactionTime {
  (timestamp: number): string;
}

export const transactionTime: TransactionTime = (timestamp) =>
  dayjs(timestamp).format('MMM D, YYYY');
