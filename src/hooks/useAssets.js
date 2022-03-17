import { useState } from 'react';
import { ALL_ASSETS } from '../constants/all-assets';

const useAssets = () => {
  const [allAssets] = useState(ALL_ASSETS);

  const allCrypto = allAssets
    .filter((asset) => asset.isFiat === false)
    .sort((prev, next) => next.market_cap - prev.market_cap);

  const yourCrypto = allAssets
    .filter((asset) => asset.isFiat === false)
    .filter((asset) => asset.balance_coin > 0)
    .sort((prev, next) => next.balance_eur - prev.balance_eur);

  const watchlistCrypto = allAssets
    .filter((asset) => asset.isFiat === false)
    .filter((asset) => asset.onWatchlist)
    .sort((prev, next) => next.market_cap - prev.market_cap);

  const allFiat = allAssets
    .filter((asset) => asset.isFiat === true)
    .sort((prev, next) => next.balance_eur - prev.balance_eur);

  return { allCrypto, yourCrypto, watchlistCrypto, allFiat };
};

export default useAssets;
