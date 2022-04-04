import dayjs from 'dayjs';

const createTotalBalanceHistory = (coinHistories) => {
  const numCoins = coinHistories.length;
  if (numCoins === 0) return;

  const result = coinHistories[0].balanceHistoryEur.map(
    (balance, pointsInTime) => {
      let balanceSum = 0;
      for (let i = 0; i < numCoins; i++) {
        balanceSum += coinHistories[i].balanceHistoryEur[pointsInTime];
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

export default createTotalBalanceHistory;
