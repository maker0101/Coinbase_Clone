import { useState, useEffect, useContext } from 'react';
import { YourCoinsContext } from '../contexts/YouCoinsContext';
import axios from 'axios';
import dayjs from 'dayjs';

// Why can't I move 'REQUEST_OPTIONS' inside 'useGetCoinPriceHistory' without producing an infinite loop? Would like to move it inside because I need to make the time period parameter dynamic.
const REQUEST_OPTIONS = {
  method: 'GET',
  url: '',
  params: { referenceCurrencyUuid: '5k-_VTxqtCEI', timePeriod: '30d' },
  headers: {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '3b41687c24mshc8f3e84a583efc7p133f24jsnc123081c735c',
  },
};

const useBalanceHistory = () => {
  const { yourCoins } = useContext(YourCoinsContext);
  const [balanceHistory, setBalanceHistory] = useState([]);

  const fetchCoinPriceHistory = async (coin, options) => {
    const url = `https://coinranking1.p.rapidapi.com/coin/${coin}/history`;
    const optionsWithUrl = { ...options, url: url };
    try {
      const response = await axios.request(optionsWithUrl);
      const priceHistory = await response.data.data.history;
      return priceHistory;
    } catch (error) {
      console.error(error);
    }
  };

  const createCoinHistories = async (yourCoins, options) => {
    const coinHistories = [];

    for (const coin of yourCoins) {
      const priceHistory = await fetchCoinPriceHistory(coin?.id, options);
      const reversedPriceHistory = priceHistory.slice().reverse();

      const coinHistory = {
        id: coin?.id,
        name: coin?.name,
        priceHistory: reversedPriceHistory,
        balanceHistoryEur: reversedPriceHistory.map(
          (data) => data?.price * coin.balance_coin
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

  const handleGetCoinPriceHistories = async (yourCoins, options) => {
    const yourCoinHistories = await createCoinHistories(yourCoins, options);
    const totalHistory = await createTotalBalanceHistory(yourCoinHistories);
    setBalanceHistory(totalHistory);
  };

  //FIXME: Terminal warning "React Hook useEffect has a missing dependency: 'handleGetCoinPriceHistories'."
  useEffect(() => {
    if (yourCoins?.length)
      handleGetCoinPriceHistories(yourCoins, REQUEST_OPTIONS);
  }, [yourCoins]);

  return { balanceHistory };
};

export default useBalanceHistory;
