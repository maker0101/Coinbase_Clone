import { calculateBalanceTotal } from './calculate-balance-total';

export const calculateAllocation = (allAssets, asset) => {
	const total = calculateBalanceTotal(allAssets);
	const allocationDecimal = asset.balance_eur / total;
	const allocationPercent = Math.round(allocationDecimal * 10000) / 100;
	return allocationPercent;
};
