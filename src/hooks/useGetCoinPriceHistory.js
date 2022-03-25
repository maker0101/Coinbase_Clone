import { useState, useEffect } from 'react';
import axios from 'axios';
import useAssets from './useAssets';
import dayjs from 'dayjs';

const YOUR_COIN_UUIDS = ['Qwsogvtv82FCd', 'razxDUgYGNAdQ'];
const REQUEST_OPTIONS = {
  method: 'GET',
  url: '',
  params: { referenceCurrencyUuid: '5k-_VTxqtCEI', timePeriod: '30d' },
  headers: {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '3b41687c24mshc8f3e84a583efc7p133f24jsnc123081c735c',
  },
};

const useGetCoinPriceHistory = () => {
  const [yourCoinHistories, setYourCoinHistories] = useState([]);
  const [totalBalanceHistory, setTotalBalanceHistory] = useState([]);
  const { yourCoins } = useAssets();

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

  const createCoinHistories = (yourCoins, options) => {
    const coinHistories = [];
    yourCoins.forEach(async (coin) => {
      const priceHistory = await fetchCoinPriceHistory(coin?.id, options);
      const coinHistory = {
        id: coin?.id,
        name: coin?.name,
        priceHistory: priceHistory,
        balanceHistoryEur: priceHistory.map(
          (data) => data?.price * coin.balance_coin
        ),
      };

      coinHistories.push(coinHistory);
    });
    return coinHistories;
  };

  const createTotalBalanceHistory = (coinHistories) => {
    const result = coinHistories[0]?.balanceHistoryEur.map(
      (balance, balanceIndex) => ({
        balance: Number(
          (balance + coinHistories[1]?.balanceHistoryEur[balanceIndex]).toFixed(
            2
          )
        ),
        timestamp: dayjs
          .unix(coinHistories[0]?.priceHistory[balanceIndex]?.timestamp)
          .format('MMM D'),
      })
    );
    return result;
  };

  //TODO: Needed to use 'yourCoinHistories' instead of 'coinHistories', otherwise 'totalBalanceHistory' will remain undefined. Can't pass 'yourCoinHistories' as parameter either
  const handleGetCoinPriceHistories = async (yourCoins, options) => {
    const coinHistories = await createCoinHistories(yourCoins, options);
    setYourCoinHistories(coinHistories);
    const totalHistory = createTotalBalanceHistory(yourCoinHistories);
    setTotalBalanceHistory(totalHistory);
  };

  console.log(yourCoins);
  console.log(yourCoinHistories);
  console.log(totalBalanceHistory);

  //TODO: Why is programming running in a loop when I replace 'YOUR_COIN_UUIDS' with 'your coins' in the dependecy array?
  useEffect(() => {
    handleGetCoinPriceHistories(yourCoins, REQUEST_OPTIONS);
  }, []);

  return { yourCoinHistories };
};

export default useGetCoinPriceHistory;
