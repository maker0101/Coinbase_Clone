interface IcalculateTotalBalance {
  (assets: { balance_eur: number }[]): number;
}

export const calculateTotalBalance: IcalculateTotalBalance = (assets) => {
  if (assets.length === 0) return 0;
  const assetBalances = assets.map((asset) => asset.balance_eur);
  const totalBalance = assetBalances.reduce((prev, next) => prev + next);
  return totalBalance;
};
