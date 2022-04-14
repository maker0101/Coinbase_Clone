import createCoinBalanceHistory from '../utilities/create-coin-balance-history';
import fetchCoinPriceHistory from '../utilities/fetch-coin-price-history';

const createCoinHistories = async (yourCoins, timeFrame, transactions) => {
  const coinHistories = [];

  for (const coin of yourCoins) {
    const priceHistory = await fetchCoinPriceHistory(coin?.id, timeFrame);
    const balanceHistory = createCoinBalanceHistory(
      coin?.id,
      priceHistory,
      transactions
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

export default createCoinHistories;
