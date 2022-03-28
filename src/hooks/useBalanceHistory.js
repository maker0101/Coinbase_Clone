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
  const [coinHistories, setCoinHistories] = useState([]);
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

  // TODO: Code currently only works for an array of 2 coins. I will generalize it later, but would like to fix the other issues first.
  const createTotalBalanceHistory = (coinHistories) => {
    const result = coinHistories[0]?.balanceHistoryEur.map((balance, i) => ({
      balance: Number(
        (balance + coinHistories[1]?.balanceHistoryEur[i]).toFixed(2)
      ),
      timestamp: dayjs
        .unix(coinHistories[0]?.priceHistory[i]?.timestamp)
        .format('MMM D'),
    }));
    return result;
  };

  //TODO: Needed to use 'coinHistories' state instead of 'yourCoinHistories', otherwise 'balanceHistory' will remain undefined. Why? Can't pass 'yourCoinHistories' as parameter either.
  const handleGetCoinPriceHistories = async (yourCoins, options) => {
    const yourCoinHistories = createCoinHistories(yourCoins, options);
    setCoinHistories(yourCoinHistories);
    const totalHistory = createTotalBalanceHistory(coinHistories);
    setBalanceHistory(totalHistory);
  };

  // QUESTION: Sometimes I get a result for 'balanceHistory', but most of the time I get 'undefined'. Why?
  console.log(balanceHistory);

  //FIXME: Terminal warning "React Hook useEffect has a missing dependency: 'handleGetCoinPriceHistories'."
  useEffect(() => {
    if (yourCoins?.length)
      handleGetCoinPriceHistories(yourCoins, REQUEST_OPTIONS);
  }, [yourCoins]);

  return { balanceHistory };
};

export default useBalanceHistory;
