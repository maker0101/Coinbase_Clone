import { findAsset } from './find-asset';

const validateSufficientFiatBalance = (transaction, fiatAssets) => {
  const fiat = findAsset(transaction?.fiat?.id, fiatAssets);
  const fiatBalance = fiat?.balance_eur;

  if (fiat && fiatBalance >= transaction?.fiat?.amount) {
    return {
      isValid: true,
      error: '',
    };
  } else {
    return {
      isValid: false,
      error: `Non-sufficient ${transaction?.fiat?.name} funds`,
    };
  }
};

const validateSufficientCoinBalance = (transaction, coinAssets) => {
  const coin = findAsset(transaction?.coin?.id, coinAssets);
  const coinBalance = coin?.balance_coin;

  if (coin && coinBalance >= transaction.coin.amount) {
    return {
      isValid: true,
      error: '',
    };
  } else {
    return {
      isValid: false,
      error: `Non-sufficient ${transaction.coin.name} funds`,
    };
  }
};

export const validateTransaction = (transaction, fiatAssets, coinAssets) => {
  switch (transaction.type) {
    case 'buyCoin':
    case 'cashoutFiat':
      return validateSufficientFiatBalance(transaction, fiatAssets);
    case 'sellCoin':
    case 'convertCoin':
    case 'sendCoin':
      return validateSufficientCoinBalance(transaction, coinAssets);
    case 'depositFiat':
      return {
        isValid: true,
        error: '',
      };
    default:
      console.error('Unknown transaction type');
      break;
  }
};
