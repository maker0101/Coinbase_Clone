import { calculateCoinAmount } from './calculate-coin-amount';

export const createTransaction = (e, type, selectedAssets, allCoins) => {
  const transaction = {
    type: type,
    timestamp: Date.now(),
    note: e.target.note?.value || '',
    address: e.target.address?.value || '',
  };

  const fiat = {
    symbol: selectedAssets.fiat?.symbol,
    name: selectedAssets.fiat?.name,
    icon: selectedAssets.fiat?.icon,
    amount: Number(e.target.amount?.value) || 0,
  };

  const coin = {
    symbol: selectedAssets.coin?.symbol,
    name: selectedAssets.coin?.name,
    icon: selectedAssets.coin?.icon,
    amount: calculateCoinAmount(
      fiat.amount,
      selectedAssets.coin?.symbol,
      allCoins
    ),
  };

  const coinConvertTo = {
    symbol: selectedAssets.coinConvertTo?.symbol,
    name: selectedAssets.coinConvertTo?.name,
    icon: selectedAssets.coinConvertTo?.icon,
    amount: calculateCoinAmount(
      fiat.amount,
      selectedAssets.coinConvertTo?.symbol,
      allCoins
    ),
  };

  switch (type) {
    case 'depositFiat':
    case 'cashoutFiat':
      return {
        ...transaction,
        fiat: fiat,
      };
    case 'buyCoin':
    case 'sellCoin':
      return {
        ...transaction,
        fiat: fiat,
        coin: coin,
      };
    case 'sendCoin':
      return {
        ...transaction,
        coin: coin,
      };
    case 'convertCoin':
      return {
        ...transaction,
        coin: coin,
        coinConvertTo: coinConvertTo,
      };
    default:
      console.error('Unsupported transaction type');
      break;
  }
};
