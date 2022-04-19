//@ts-nocheck
//FIXME: createCoin is causing typescript error
import { Firestore, doc, getDoc, updateDoc } from 'firebase/firestore';

import { addCoin } from './add-coin';
import { createCoin } from './create-coin';

interface ToggleOnWatchlist {
  (db: Firestore, coin: { id: string; onWatchlist: boolean }): void;
}

export const toggleOnWatchlist: ToggleOnWatchlist = async (db, coin) => {
  const checkIsYourCoin = async (db: Firestore, coinId: string) => {
    const coin = await getDoc(doc(db, 'yourCoins', coinId));
    return coin.exists();
  };
  const isYourCoin = await checkIsYourCoin(db, coin?.id);

  try {
    if (isYourCoin) {
      const coinDoc = doc(db, 'yourCoins', coin?.id);
      updateDoc(coinDoc, { onWatchlist: !coin?.onWatchlist });
    } else {
      //TS complaining if turned on: why? I don't understand the error message? -> Property 'id' is missing in type '{}' but required in type '{ id: string; }'.
      addCoin(db, createCoin(coin, 0, true));
    }
  } catch (error) {
    console.error(error);
  }
};
