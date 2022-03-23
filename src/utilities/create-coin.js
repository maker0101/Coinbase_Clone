export const createCoin = (symbol, balance = 0, onWatchlist = false) => ({
  symbol: symbol,
  balance_coin: balance,
  onWatchlist: onWatchlist,
});
