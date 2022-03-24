import { transformSparkline } from '../utilities/transform-sparkline';
import { findAsset } from '../utilities/find-asset';
import { calculateCoinBalance } from '../utilities/calculate-coin-balance';

export const adaptFetchedCoins = (fetchedCoins, yourCoins) => {
  const adaptedCoins = [];
  fetchedCoins.forEach((coin) => {
    const coinBalance = findAsset(coin.symbol, yourCoins)?.balance_coin || 0;
    const onWatchList = findAsset(coin.symbol, yourCoins)?.onWatchlist || false;
    const coinId = findAsset(coin.symbol, yourCoins)?.id || '';

    let coinAsset = {
      uuid: coin.uuid,
      id: coinId,
      name: coin.name,
      symbol: coin.symbol,
      isFiat: false,
      icon: coin.iconUrl,
      color: coin.color,
      balance_eur: calculateCoinBalance(coinBalance, coin.price),
      balance_coin: coinBalance,
      price_eur: Number(coin.price),
      price_change24h: Number(coin.change),
      market_cap: Number(coin.marketCap),
      onWatchlist: onWatchList,
      sparkline: transformSparkline(coin),
    };
    adaptedCoins.push(coinAsset);
  });
  return adaptedCoins;
};
