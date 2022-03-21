import useGetTransactions from './useGetTransactions';

const useTransactions = () => {
  const { transactions } = useGetTransactions();

  const tradeTransactions = transactions
    .filter(
      (t) =>
        t.type === 'buyCoin' ||
        t.type === 'sellCoin' ||
        t.type === 'convertCoin'
    )
    .sort((prev, next) => next.timestamp - prev.timestamp);

  return { tradeTransactions };
};

export default useTransactions;
