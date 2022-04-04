import { useState, useEffect, useContext } from 'react';
import { YourCoinsContext } from '../contexts/YouCoinsContext';
import { translateSelectedTimeframe } from '../utilities/translate-selected-timeframe';
import axios from 'axios';
import dayjs from 'dayjs';
import useTransactions from './useTransactions';

const useBalanceHistory = (activeTimeFrame) => {
  const { yourCoins } = useContext(YourCoinsContext);
  const [balanceHistory, setBalanceHistory] = useState([]);
  const { coinTransactions } = useTransactions();

  const createRequestOptions = (coin, timeFrame) => {
    const timePeriod = translateSelectedTimeframe(timeFrame);
    return {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${coin}/history`,
      params: {
        referenceCurrencyUuid: '5k-_VTxqtCEI',
        timePeriod: timePeriod,
      },
      headers: {
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        'X-RapidAPI-Key': '3b41687c24mshc8f3e84a583efc7p133f24jsnc123081c735c',
      },
    };
  };

  const fetchCoinPriceHistory = async (coin, timeFrame) => {
    const requestOptions = createRequestOptions(coin, timeFrame);
    try {
      const response = await axios.request(requestOptions);
      const priceHistoryTurned = await response.data.data.history;
      const priceHistory = priceHistoryTurned.slice().reverse();
      return priceHistory;
    } catch (error) {
      console.error(error);
    }
  };

  const createCoinBalanceHistory = (coinId, priceHistory, transactions) => {
    const coinBalanceHistory = priceHistory.map((data) => {
      const filteredTransactions = transactions
        .filter((t) => coinId === t?.coin?.id || t?.coinConvertTo?.id)
        .filter((t) => data.timestamp * 1000 > t.timestamp);

      const balance = filteredTransactions.reduce((accum, curr) => {
        switch (curr.type) {
          case 'buyCoin':
            return accum + curr.coin?.amount;
          case 'sellCoin':
          case 'sendCoin':
            return accum - curr.coin?.amount;
          case 'convertCoin':
            if (coinId === curr.coin?.id) return accum - curr.coin?.amount;
            if (coinId === curr.coinConvertTo?.id)
              return accum + curr.coinConvertTo?.amount;
          default:
            return accum;
        }
      }, 0);

      return {
        timestamp: data?.timestamp,
        balance: balance,
      };
    });
    return coinBalanceHistory;
  };

  const createCoinHistories = async (yourCoins, timeFrame) => {
    const coinHistories = [];

    for (const coin of yourCoins) {
      const priceHistory = await fetchCoinPriceHistory(coin?.id, timeFrame);
      const balanceHistory = createCoinBalanceHistory(
        coin?.id,
        priceHistory,
        coinTransactions
      );

      const coinHistory = {
        id: coin?.id,
        name: coin?.name,
        priceHistory: priceHistory,
        coinBalanceHistory: balanceHistory,
        balanceHistoryEur: priceHistory.map(
          (time, index) => time?.price * balanceHistory[index]?.balance
        ),
      };
      coinHistories.push(coinHistory);
    }
    return coinHistories;
  };

  const createTotalBalanceHistory = (coinHistories) => {
    const numCoins = coinHistories.length;
    if (numCoins === 0) return;

    const result = coinHistories[0]?.balanceHistoryEur.map(
      (balance, pointsInTime) => {
        let balanceSum = 0;
        for (let i = 0; i < numCoins; i++) {
          balanceSum += coinHistories[i]?.balanceHistoryEur[pointsInTime];
        }

        return {
          balance: Number(balanceSum.toFixed(2)),
          timestamp: dayjs
            .unix(coinHistories[0]?.priceHistory[pointsInTime]?.timestamp)
            .format('MMM D, HH:mm'),
        };
      }
    );
    return result;
  };

  const handleGetCoinPriceHistories = async (yourCoins, timeFrame) => {
    const yourCoinHistories = await createCoinHistories(yourCoins, timeFrame);
    const totalHistory = await createTotalBalanceHistory(yourCoinHistories);
    setBalanceHistory(totalHistory);
  };

  //FIXME: Terminal warning "React Hook useEffect has a missing dependency: 'handleGetCoinPriceHistories'."
  useEffect(() => {
    if (yourCoins?.length)
      handleGetCoinPriceHistories(yourCoins, activeTimeFrame);
  }, [yourCoins, activeTimeFrame]);

  return { balanceHistory };
};

export default useBalanceHistory;
