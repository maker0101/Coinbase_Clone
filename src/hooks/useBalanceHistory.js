import { useContext, useEffect, useState } from 'react';

import { AssetsContext } from '../contexts/AssetsContext';
import { TransactionsContext } from '../contexts/TransactionsContext';
import createCoinHistories from '../utilities/create-coin-histories';
import createTotalBalanceHistory from '../utilities/create-total-balance-history';

const useBalanceHistory = (activeTimeFrame) => {
  const { yourCoins } = useContext(AssetsContext);
  const [balanceHistory, setBalanceHistory] = useState([]);
  const { coinTransactions } = useContext(TransactionsContext);

  const handleGetCoinPriceHistories = async (coins, time, transactions) => {
    const coinHistories = await createCoinHistories(coins, time, transactions);
    const totalHistory = await createTotalBalanceHistory(coinHistories);
    setBalanceHistory(totalHistory);
  };

  useEffect(() => {
    if (yourCoins?.length)
      handleGetCoinPriceHistories(yourCoins, activeTimeFrame, coinTransactions);
  }, [yourCoins, activeTimeFrame]);

  return balanceHistory;
};

export default useBalanceHistory;
