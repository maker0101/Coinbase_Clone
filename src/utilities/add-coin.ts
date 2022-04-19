import { Firestore, doc, setDoc } from 'firebase/firestore';

interface AddCoin {
  (db: Firestore, coin: { id: string }): void;
}

export const addCoin: AddCoin = async (db, coin) => {
  try {
    await setDoc(doc(db, 'yourCoins', coin.id), { ...coin });
  } catch (err) {
    console.error(err);
  }
};
