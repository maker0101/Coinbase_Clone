import { Firestore, doc, setDoc } from 'firebase/firestore';

interface IaddCoin {
  (db: Firestore, coin: { id: string }): void;
}

export const addCoin: IaddCoin = async (db, coin) => {
  try {
    await setDoc(doc(db, 'yourCoins', coin.id), { ...coin });
  } catch (err) {
    console.error(err);
  }
};
