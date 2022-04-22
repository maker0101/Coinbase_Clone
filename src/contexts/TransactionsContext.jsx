import { createContext } from 'react';
import useTransactions from '../hooks/useTransactions';

const TransactionsContext = createContext();

const TransactionsProvider = ({ children }) => {
  const {
    tradeTransactions,
    sendTransactions,
    coinTransactions,
    fiatTransactions,
  } = useTransactions();

  return (
    <TransactionsContext.Provider
      value={{
        tradeTransactions,
        sendTransactions,
        coinTransactions,
        fiatTransactions,
      }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export { TransactionsContext, TransactionsProvider };
