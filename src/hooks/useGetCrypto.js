import { useState, useEffect } from 'react';
import axios from 'axios';
import { ALL_ASSETS } from '../constants/all-assets';

const REQUEST_OPTIONS = {
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

const useGetCrypto = () => {
  const [cryptoAssets, setCryptoAssets] = useState(ALL_ASSETS);

  const fetchCrypto = async (options) => {
    try {
      const response = await axios.request(options);
      const coins = await response.data.data.coins;
      return coins;
    } catch (error) {
      console.error(error);
    }
  };

  const transformCrypto = (assets) => {
    const transformedAssets = [];
    assets.forEach((asset) => {
      const sparklineNums = asset.sparkline.map((num) => Number(num));

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
        sparkline: sparklineNums,
      };
      transformedAssets.push(newAsset);
    });
    return transformedAssets;
  };

  const handleGetCrypto = async (requestOptions) => {
    const fetchedCrypto = await fetchCrypto(requestOptions);
    const transformedCrypto = transformCrypto(fetchedCrypto);
    setCryptoAssets(transformedCrypto);
  };

  useEffect(() => {
    handleGetCrypto(REQUEST_OPTIONS);
  }, []);

  return { cryptoAssets };
};

export default useGetCrypto;
