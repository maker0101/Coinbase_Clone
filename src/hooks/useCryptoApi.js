import { useState, useEffect } from 'react';
import axios from 'axios';

const useCryptoApi = () => {
  const [cryptoAssets, setCryptoAssets] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: '5k-_VTxqtCEI', //euro
      timePeriod: '24h',
      tiers: '1,2',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '100',
      offset: '0',
    },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '64ea0e9616msha5082e01bdaa101p11219ajsnf796c1accd2f',
    },
  };

  const getCryptoAssets = async (options) => {
    try {
      console.log('calling Coinranking API');
      const response = await axios.request(options);
      const coins = await response.data.data.coins;
      setCryptoAssets(coins);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCryptoAssets(options);
  }, []);

  console.log(cryptoAssets);

  const transformCryptoAssets = (assets) => {
    const newAssets = [];
    assets.forEach((asset) => {
      let newAsset = {
        name: asset.name,
        symbol: asset.symbol,
        isFiat: false,
        icon: asset.iconUrl,
        color: asset.color,
        balance_eur: 10986.74,
        balance_coin: 0.84433661,
        price_eur: Number(asset.price),
        price_change24h: Number(asset.change),
        market_cap: Number(asset.marketCap),
        onWatchlist: false,
        sparkline: asset.sparkline,
      };
      newAssets.push(newAsset);
    });
    return newAssets;
  };

  console.log(transformCryptoAssets(cryptoAssets));

  return { cryptoAssets };
};

export default useCryptoApi;
