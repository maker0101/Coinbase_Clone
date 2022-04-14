import { doc, setDoc } from 'firebase/firestore';

export const addCoin = async (db, coin) => {
  try {
    await setDoc(doc(db, 'yourCoins', coin.id), { ...coin });
  } catch (err) {
    console.error(err);
  }
};
