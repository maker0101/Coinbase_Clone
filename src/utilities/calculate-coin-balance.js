export const calculateCoinBalance = (balanceCoin, priceEUR) =>
  balanceCoin * Number(priceEUR) || 0;
