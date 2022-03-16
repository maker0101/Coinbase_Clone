import { FIAT_ASSETS } from '../constants/fiat-assets';
import useGetCrypto from './useGetCrypto';

const useAssets = () => {
  const { cryptoAssets } = useGetCrypto();

  const allCrypto = cryptoAssets.sort(
    (prev, next) => next.market_cap - prev.market_cap
  );

  const yourCrypto = cryptoAssets
    .filter((asset) => asset.balance_coin > 0)
    .sort((prev, next) => next.balance_eur - prev.balance_eur);

  const watchlistCrypto = cryptoAssets
    .filter((asset) => asset.onWatchlist)
    .sort((prev, next) => next.market_cap - prev.market_cap);

  const allFiat = FIAT_ASSETS.sort(
    (prev, next) => next.balance_eur - prev.balance_eur
  );

  return { allCrypto, yourCrypto, watchlistCrypto, allFiat };
};

export default useAssets;
