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

export default createCoinBalanceHistory;
