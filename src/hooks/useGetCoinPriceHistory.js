import { useState, useEffect } from 'react';
import axios from 'axios';

const REQUEST_OPTIONS = {
  method: 'GET',
  url: '',
  params: { referenceCurrencyUuid: '5k-_VTxqtCEI', timePeriod: '24h' },
  headers: {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '3b41687c24mshc8f3e84a583efc7p133f24jsnc123081c735c',
  },
};

const YOUR_COIN_UUIDS = ['Qwsogvtv82FCd', 'razxDUgYGNAdQ'];

const useGetCoinPriceHistory = () => {
  const [coinPriceHistories, setCoinPriceHistories] = useState([]);

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

  const fetchCoinPriceHistories = (coins, options) => {
    const priceHistories = [];
    coins.forEach(async (coin) => {
      const priceHistory = await fetchCoinPriceHistory(coin, options);
      priceHistories.push(priceHistory);
    });

    return priceHistories;
  };

  const handleGetCoinPriceHistories = (coins, options) => {
    const priceHistories = fetchCoinPriceHistories(coins, options);
    setCoinPriceHistories(priceHistories);
  };

  useEffect(() => {
    handleGetCoinPriceHistories(YOUR_COIN_UUIDS, REQUEST_OPTIONS);
  }, [YOUR_COIN_UUIDS, REQUEST_OPTIONS]);

  return { coinPriceHistories };
};

export default useGetCoinPriceHistory;
