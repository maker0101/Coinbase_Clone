import { findAsset } from './find-asset';

export const validateTransaction = (t, fiatAssets, coinAssets) => {
  let isValid = false;
  let error = '';

  switch (t.type) {
    case 'buyCoin':
    case 'cashoutFiat':
      const fiatBalance = findAsset(t.out_symbol, fiatAssets)?.balance_eur;
      if (fiatBalance && fiatBalance >= t.amount_fiat) {
        isValid = true;
      } else {
        isValid = false;
        error = `Non-sufficient ${t.out_name} funds`;
      }
      break;
    case 'sellCoin':
    case 'convertCoin':
    case 'sendCoin':
      const coinBalance = findAsset(t.out_symbol, coinAssets)?.balance_coin;

      if (coinBalance && coinBalance >= t.amount_coin_out) {
        isValid = true;
      } else {
        isValid = false;
        error = `Non-sufficient ${t.out_name} funds`;
      }
      break;
    case 'depositFiat':
      isValid = true;
      break;
    default:
      console.error('Unknown transaction type');
      break;
  }

  return {
    isValid: isValid,
    error: error,
  };
};
