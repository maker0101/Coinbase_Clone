import { useContext, useEffect, useState } from 'react';

import { YourCoinsContext } from '../contexts/YouCoinsContext';
import createCoinHistories from '../utilities/create-coin-histories';
import createTotalBalanceHistory from '../utilities/create-total-balance-history';
import useTransactions from './useTransactions';

const useBalanceHistory = (activeTimeFrame) => {
  const { yourCoins } = useContext(YourCoinsContext);
  const [balanceHistory, setBalanceHistory] = useState([]);
  const { coinTransactions } = useTransactions();

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
