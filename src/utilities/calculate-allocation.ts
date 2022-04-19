import { calculateTotalBalance } from './calculate-total-balance';

interface CalculateAllocation {
  (allCoins: { balance_eur: number }[], asset: { balance_eur: number }): number;
}

export const calculateAllocation: CalculateAllocation = (allCoins, asset) => {
  const total = calculateTotalBalance(allCoins);
  const allocationDecimal = asset.balance_eur / total;
  const allocationPercent = Math.round(allocationDecimal * 10000) / 100;
  return allocationPercent;
};
