import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { createCoin } from './create-coin';
import { addCoin } from './add-coin';

export const toggleOnWatchlist = async (db, coin) => {
  const checkIsYourCoin = async (db, coinId) => {
    const coin = await getDoc(doc(db, 'yourCoins', coinId));
    return coin.exists();
  };
  const isYourCoin = await checkIsYourCoin(db, coin?.id);

  try {
    if (isYourCoin) {
      const coinDoc = doc(db, 'yourCoins', coin?.id);
      await updateDoc(coinDoc, {
        onWatchlist: !coin?.onWatchlist,
      });
    } else {
      await addCoin(db, createCoin(coin, 0, true));
    }
  } catch (error) {
    console.error(error);
  }
};
