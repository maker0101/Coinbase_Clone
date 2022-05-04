interface IcalculateCoinBalance {
  (balanceCoin: number, price_eur: number): number;
}

export const calculateCoinBalance: IcalculateCoinBalance = (
  balanceCoin,
  priceEUR
) => balanceCoin * Number(priceEUR) || 0;
