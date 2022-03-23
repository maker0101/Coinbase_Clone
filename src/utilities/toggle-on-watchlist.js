import { updateDoc, doc } from 'firebase/firestore';
import { createCoin } from './create-coin';
import { addCoin } from './add-coin';

export const toggleOnWatchlist = async (db, coin) => {
  const coinId = coin?.id;

  try {
    if (coinId) {
      const coinDoc = doc(db, 'yourCoins', coinId);
      await updateDoc(coinDoc, {
        onWatchlist: !coin?.onWatchlist,
      });
    } else {
      await addCoin(db, createCoin(coin.symbol, 0, true));
    }
  } catch (error) {
    console.error(error);
  }
};
