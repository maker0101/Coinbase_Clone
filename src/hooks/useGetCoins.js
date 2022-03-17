import { useState, useEffect } from 'react';
import axios from 'axios';
import { YOUR_COINS } from '../constants/your-coins';
import { GET_COINS_OPTIONS } from '../constants/request-options';
import { transformSparkline } from '../utilities/transform-sparkline';
import { findAsset } from '../utilities/find-asset';
import { calculateCoinBalance } from '../utilities/calculate-coin-balance';

const useGetCoins = () => {
  const [coins, setCoins] = useState([]);

  const fetchCoins = async (options) => {
    try {
      const response = await axios.request(options);
      const coins = await response.data.data.coins;
      return coins;
    } catch (error) {
      console.error(error);
    }
  };

  const adaptCoins = (fetchedCoins, yourCoins) => {
    const adaptedCoins = [];
    fetchedCoins.forEach((coin) => {
      const coinBalance = findAsset(coin.symbol, yourCoins)?.balance_coin || 0;
      const onWatchList =
        findAsset(coin.symbol, yourCoins)?.onWatchlist || false;

      let coinAsset = {
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

  const handleGetCoins = async (requestOptions) => {
    const fetchedCoins = await fetchCoins(requestOptions);
    const adaptedCoins = adaptCoins(fetchedCoins, YOUR_COINS);
    setCoins(adaptedCoins);
  };

  //FIXME: Terminal warning "React Hook useEffect has a missing dependency: 'handleGetCoins'."
  useEffect(() => {
    handleGetCoins(GET_COINS_OPTIONS);
  }, []);

  return { coins };
};

export default useGetCoins;
