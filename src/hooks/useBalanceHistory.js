import { useState, useEffect, useContext } from 'react';
import { YourCoinsContext } from '../contexts/YouCoinsContext';
import useTransactions from './useTransactions';
import createCoinHistories from '../utilities/create-coin-histories';
import createTotalBalanceHistory from '../utilities/create-total-balance-history';

const useBalanceHistory = (activeTimeFrame) => {
  const { yourCoins } = useContext(YourCoinsContext);
  const [balanceHistory, setBalanceHistory] = useState([]);
  const { coinTransactions } = useTransactions();

  const handleGetCoinPriceHistories = async (coins, time, transactions) => {
    const coinHistories = await createCoinHistories(coins, time, transactions);
    const totalHistory = await createTotalBalanceHistory(coinHistories);
    setBalanceHistory(totalHistory);
  };

  //FIXME: Terminal warning "React Hook useEffect has a missing dependency: 'handleGetCoinPriceHistories'."
  useEffect(() => {
    if (yourCoins?.length)
      handleGetCoinPriceHistories(yourCoins, activeTimeFrame, coinTransactions);
  }, [yourCoins, activeTimeFrame]);

  return balanceHistory;
};

export default useBalanceHistory;
