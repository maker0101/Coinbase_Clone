export const calculateBalanceTotal = (assets) => {
	const assetBalances = assets.map((asset) => asset.balance_eur);
	const totalBalance = assetBalances.reduce((prev, next) => prev + next);
	return totalBalance;
};
