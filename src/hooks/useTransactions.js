import useGetTransactions from './useGetTransactions';

const useTransactions = () => {
  const { transactions } = useGetTransactions();

  const tradeTransactions = transactions.filter(
    (t) =>
      t.type === 'buyCoin' || t.type === 'sellCoin' || t.type === 'convertCoin'
  );

  return { tradeTransactions };
};

export default useTransactions;
