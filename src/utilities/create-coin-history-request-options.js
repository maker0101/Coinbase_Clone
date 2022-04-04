import { translateSelectedTimeframe } from './translate-selected-timeframe';

const createCoinHistoryRequestOptions = (coin, timeFrame) => {
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

export default createCoinHistoryRequestOptions;
