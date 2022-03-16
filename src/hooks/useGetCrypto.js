import { useState, useEffect } from 'react';
import axios from 'axios';
import { YOUR_CRYPTO } from '../constants/your-crypto';
import { REQUEST_OPTIONS } from '../constants/request-options';

const useGetCrypto = () => {
  const [cryptoAssets, setCryptoAssets] = useState([]);

  const fetchCrypto = async (options) => {
    try {
      const response = await axios.request(options);
      const coins = await response.data.data.coins;
      return coins;
    } catch (error) {
      console.error(error);
    }
  };

  const transformSparkline = (asset) => {
    const newSparkline = [];
    let i = 0;
    asset.sparkline.forEach((price) => {
      i += 1;
      newSparkline.push({
        price: Number(price),
        time: String(i),
      });
    });
    return newSparkline;
  };

  const findAsset = (symbol, assets) =>
    assets.find((asset) => asset.symbol === symbol);

  const calcBalanceEur = (balanceCoin, priceEUR) =>
    balanceCoin * Number(priceEUR) || 0;

  const transformCrypto = (fetchedCrypto, yourCrypto) => {
    const transformedCrypto = [];
    fetchedCrypto.forEach((asset) => {
      const balanceCoin =
        findAsset(asset.symbol, yourCrypto)?.balance_coin || 0;
      const onWatchList =
        findAsset(asset.symbol, yourCrypto)?.onWatchlist || false;

      let tranformedAsset = {
        name: asset.name,
        symbol: asset.symbol,
        isFiat: false,
        icon: asset.iconUrl,
        color: asset.color,
        balance_eur: calcBalanceEur(balanceCoin, asset.price),
        balance_coin: balanceCoin,
        price_eur: Number(asset.price),
        price_change24h: Number(asset.change),
        market_cap: Number(asset.marketCap),
        onWatchlist: onWatchList,
        sparkline: transformSparkline(asset),
      };
      transformedCrypto.push(tranformedAsset);
    });
    return transformedCrypto;
  };

  const handleGetCrypto = async (requestOptions) => {
    const fetchedCrypto = await fetchCrypto(requestOptions);
    const transformedCrypto = transformCrypto(fetchedCrypto, YOUR_CRYPTO);
    setCryptoAssets(transformedCrypto);
  };

  //FIXME: Terminal warning "React Hook useEffect has a missing dependency: 'handleGetCrypto'."
  useEffect(() => {
    handleGetCrypto(REQUEST_OPTIONS);
  }, []);

  return { cryptoAssets };
};

export default useGetCrypto;
