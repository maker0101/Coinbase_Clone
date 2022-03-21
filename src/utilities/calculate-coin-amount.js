import { findAsset } from './find-asset';

export const calculateCoinAmount = (transactionAmount, symbol, assets) => {
  const coin = findAsset(symbol, assets);
  const coinAmount = transactionAmount / coin?.price_eur;
  return coinAmount;
};
