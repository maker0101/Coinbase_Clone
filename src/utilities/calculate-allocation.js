import { calculateBalanceTotal } from './calculate-balance-total';

export const calculateAllocation = (allCrypto, asset) => {
	const total = calculateBalanceTotal(allCrypto);
	const allocationDecimal = asset.balance_eur / total;
	const allocationPercent = Math.round(allocationDecimal * 10000) / 100;
	return allocationPercent;
};
