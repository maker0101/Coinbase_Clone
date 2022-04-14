import { addCoin } from './add-coin';
import { createCoin } from './create-coin';
import { findAsset } from './find-asset';
import { updateCoinBalance } from './update-coin-balance';

export const updateCoins = (db, transaction, coinAssets) => {
  try {
    const coin = findAsset(transaction?.coin?.id, coinAssets);
    let newCoinBalance;

    switch (transaction.type) {
      case 'buyCoin':
        newCoinBalance = coin?.balance_coin + transaction?.coin?.amount;
        if (coin) {
          updateCoinBalance(db, coin?.id, newCoinBalance);
        } else {
          const newCoin = createCoin(
            transaction?.coin,
            transaction?.coin?.amount
          );
          addCoin(db, newCoin);
        }
        break;

      case 'sendCoin':
      case 'sellCoin':
        newCoinBalance = coin?.balance_coin - transaction?.coin?.amount;
        updateCoinBalance(db, coin.id, newCoinBalance);
        break;

      case 'convertCoin':
        const coinConvertTo = findAsset(
          transaction?.coinConvertTo?.id,
          coinAssets
        );

        newCoinBalance = coin?.balance_coin - transaction?.coin?.amount;
        const newCoinConvertToBalance =
          coinConvertTo?.balance_coin + transaction?.coinConvertTo?.amount;

        if (coinConvertTo) {
          updateCoinBalance(db, coin.id, newCoinBalance);
          updateCoinBalance(db, coinConvertTo?.id, newCoinConvertToBalance);
        } else {
          updateCoinBalance(db, coin.id, newCoinBalance);
          const newCoin = createCoin(
            transaction?.coinConvertTo,
            transaction?.coinConvertTo?.amount
          );
          addCoin(db, newCoin);
        }
        break;
      case 'cashoutFiat':
      case 'depositFiat':
        return;
      default:
        console.error('Unknown transaction type');
        return;
    }
  } catch (err) {
    console.error(err);
  }
};
