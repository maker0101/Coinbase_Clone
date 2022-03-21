import { calculateCoinAmount } from './calculate-coin-amount';

export const createTransaction = (e, type, selectedAssets, allCoins) => {
  let transaction = {
    type: type,
    amount_fiat: Number(e.target.amount?.value) || 0,
    timestamp: Date.now(),
    note: e.target.note?.value || '',
    address: e.target.address?.value || '',
  };

  switch (type) {
    case 'buyCoin':
      return {
        ...transaction,
        in_symbol: selectedAssets.coin.symbol,
        out_symbol: selectedAssets.fiat.symbol,
        in_name: selectedAssets.coin.name,
        out_name: selectedAssets.fiat.name,
        amount_coin_in: calculateCoinAmount(
          transaction.amount_fiat,
          selectedAssets.coin.symbol,
          allCoins
        ),
        icon: selectedAssets.coin.icon,
      };
    case 'sellCoin':
      return {
        ...transaction,
        in_symbol: selectedAssets.fiat.symbol,
        out_symbol: selectedAssets.coin.symbol,
        in_name: selectedAssets.fiat.name,
        out_name: selectedAssets.coin.name,
        amount_coin_out: calculateCoinAmount(
          transaction.amount_fiat,
          selectedAssets.coin.symbol,
          allCoins
        ),
        icon: selectedAssets.coin.icon,
      };
    case 'convertCoin':
      return {
        ...transaction,
        in_symbol: selectedAssets.coinConvertTo.symbol,
        out_symbol: selectedAssets.coin.symbol,
        in_name: selectedAssets.coinConvertTo.name,
        out_name: selectedAssets.coin.name,
        amount_coin_in: calculateCoinAmount(
          transaction.amount_fiat,
          selectedAssets.coinConvertTo.symbol,
          allCoins
        ),
        amount_coin_out: calculateCoinAmount(
          transaction.amount_fiat,
          selectedAssets.coin.symbol,
          allCoins
        ),
        icon: selectedAssets.coin.icon,
      };
    case 'sendCoin':
      return {
        ...transaction,
        out_symbol: selectedAssets.coin.symbol,
        out_name: selectedAssets.coin.name,
        amount_coin_out: calculateCoinAmount(
          transaction.amount_fiat,
          selectedAssets.coin.symbol,
          allCoins
        ),
        icon: selectedAssets.coin.icon,
      };
    case 'depositFiat':
      return { ...transaction, in: selectedAssets.fiat.symbol };
    case 'cashoutFiat':
      return { ...transaction, out: selectedAssets.fiat.symbol };
    default:
      break;
  }
  return transaction;
};
