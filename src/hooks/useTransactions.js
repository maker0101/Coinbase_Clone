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

  const sendTransactions = transactions
    .filter((t) => t.type === 'sendCoin')
    .sort((prev, next) => next.timestamp - prev.timestamp);

  const fiatTransactions = transactions
    .filter((t) => t.type === 'depositFiat' || t.type === 'cashoutFiat')
    .sort((prev, next) => next.timestamp - prev.timestamp);

  return { tradeTransactions, sendTransactions, fiatTransactions };
};

export default useTransactions;
