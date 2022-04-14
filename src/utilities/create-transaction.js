import { calculateCoinAmount } from './calculate-coin-amount';

export const createTransaction = (e, type, selectedAssets, allCoins) => {
  const transaction = {
    type: type,
    timestamp: Date.now(),
    note: e.target.note?.value || '',
    address: e.target.address?.value || '',
  };

  const fiat = {
    id: selectedAssets?.fiat?.id,
    symbol: selectedAssets?.fiat?.symbol,
    name: selectedAssets?.fiat?.name,
    icon: selectedAssets?.fiat?.icon,
    amount: Number(e.target.amount?.value) || 0,
  };

  const coin = {
    id: selectedAssets?.coin?.id,
    symbol: selectedAssets?.coin?.symbol,
    name: selectedAssets?.coin?.name,
    icon: selectedAssets?.coin?.icon,
    amount: calculateCoinAmount(
      fiat?.amount,
      selectedAssets?.coin?.id,
      allCoins
    ),
  };

  const coinConvertTo = {
    id: selectedAssets?.coinConvertTo?.id,
    symbol: selectedAssets?.coinConvertTo?.symbol,
    name: selectedAssets?.coinConvertTo?.name,
    icon: selectedAssets?.coinConvertTo?.icon,
    amount: calculateCoinAmount(
      fiat?.amount,
      selectedAssets?.coinConvertTo?.id,
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
