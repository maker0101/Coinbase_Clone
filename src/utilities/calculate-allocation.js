import { calculateTotalBalance } from './calculate-total-balance';

export const calculateAllocation = (allCoins, asset) => {
  const total = calculateTotalBalance(allCoins);
  const allocationDecimal = asset.balance_eur / total;
  const allocationPercent = Math.round(allocationDecimal * 10000) / 100;
  return allocationPercent;
};
