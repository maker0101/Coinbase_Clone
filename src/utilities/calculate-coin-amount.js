import { findAsset } from './find-asset';

export const calculateCoinAmount = (transactionAmount, id, assets) => {
  const coin = findAsset(id, assets);
  const coinAmount = transactionAmount / coin?.price_eur;
  return coinAmount;
};
