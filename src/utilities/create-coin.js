export const createCoin = (coin, balance = 0, onWatchlist = false) => ({
  id: coin?.id,
  symbol: coin?.symbol,
  balance_coin: balance,
  onWatchlist: onWatchlist,
});
