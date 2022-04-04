import axios from 'axios';
import createCoinHistoryRequestOptions from '../utilities/create-coin-history-request-options';

const fetchCoinPriceHistory = async (coin, timeFrame) => {
  const requestOptions = createCoinHistoryRequestOptions(coin, timeFrame);
  try {
    const response = await axios.request(requestOptions);
    const priceHistoryTurned = response.data.data.history;
    const priceHistory = priceHistoryTurned.slice().reverse();
    return priceHistory;
  } catch (error) {
    console.error(error);
  }
};

export default fetchCoinPriceHistory;
