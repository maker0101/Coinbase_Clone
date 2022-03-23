import { findAsset } from './find-asset';
import { createCoin } from './create-coin';
import { addCoin } from './add-coin';
import { updateCoinBalance } from './update-coin-balance';

export const updateCoins = (db, transaction, coinAssets) => {
  try {
    const coin = findAsset(transaction?.coin?.symbol, coinAssets);
    let newCoinBalance;

    switch (transaction.type) {
      case 'buyCoin':
        newCoinBalance = coin?.balance_coin + transaction?.coin?.amount;
        coin
          ? updateCoinBalance(db, coin?.id, newCoinBalance)
          : addCoin(
              db,
              createCoin(transaction?.coin?.symbol, transaction?.coin?.amount)
            );
        break;
      case 'sendCoin':
      case 'sellCoin':
        newCoinBalance = coin?.balance_coin - transaction?.coin?.amount;
        updateCoinBalance(db, coin.id, newCoinBalance);
        break;
      case 'convertCoin':
        const coinConvertTo = findAsset(
          transaction?.coinConvertTo?.symbol,
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
          addCoin(
            db,
            createCoin(
              transaction?.coinConvertTo?.symbol,
              transaction?.coinConvertTo?.amount
            )
          );
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
