interface CalculateCoinBalance {
  (balanceCoin: number, price_eur: number): number;
}

export const calculateCoinBalance: CalculateCoinBalance = (
  balanceCoin,
  priceEUR
) => balanceCoin * Number(priceEUR) || 0;
