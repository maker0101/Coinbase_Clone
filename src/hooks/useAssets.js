import useGetCoins from './useGetCoins';
import useGetFiat from './useGetFiat';

const useAssets = () => {
  const { coins } = useGetCoins();
  const { fiat } = useGetFiat();

  const allCoins = coins.sort(
    (prev, next) => next.market_cap - prev.market_cap
  );

  const yourCoins = coins
    .filter((asset) => asset.balance_coin > 0)
    .sort((prev, next) => next.balance_eur - prev.balance_eur);

  const coinsOnWatchlist = coins
    .filter((asset) => asset.onWatchlist)
    .sort((prev, next) => next.market_cap - prev.market_cap);

  const allFiat = fiat.sort(
    (prev, next) => next.balance_eur - prev.balance_eur
  );

  return { allCoins, yourCoins, coinsOnWatchlist, allFiat };
};

export default useAssets;
