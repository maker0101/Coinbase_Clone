import { findAsset } from './find-asset';

interface CalculateCoinAmount {
  (transactionAmount: number, id: string, assets: object[]): number;
}

export const calculateCoinAmount: CalculateCoinAmount = (
  transactionAmount,
  id,
  assets
) => {
  const coin = findAsset(id, assets);
  const coinAmount = transactionAmount / coin?.price_eur;
  return coinAmount;
};
