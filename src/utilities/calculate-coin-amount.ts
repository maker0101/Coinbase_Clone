import { findAsset } from './find-asset';

interface IcalculateCoinAmount {
  (transactionAmount: number, id: string, assets: object[]): number;
}

export const calculateCoinAmount: IcalculateCoinAmount = (
  transactionAmount,
  id,
  assets
) => {
  const coin = findAsset(id, assets);
  const coinAmount = transactionAmount / coin?.price_eur;
  return coinAmount;
};
