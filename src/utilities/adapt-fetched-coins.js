import { calculateCoinBalance } from '../utilities/calculate-coin-balance';
import { findAsset } from '../utilities/find-asset';
import { transformSparkline } from '../utilities/transform-sparkline';

export const adaptFetchedCoins = (fetchedCoins, yourCoins) => {
  const adaptedCoins = fetchedCoins.map((coin) => {
    const coinFound = findAsset(coin?.uuid, yourCoins);
    const coinBalance = coinFound?.balance_coin || 0;
    const onWatchList = coinFound?.onWatchlist || false;

    return {
      id: coin.uuid,
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
  });
  return adaptedCoins;
};
