import { addDoc, collection } from 'firebase/firestore';

export const addCoin = async (db, coin) => {
  try {
    await addDoc(collection(db, 'yourCoins'), { ...coin });
  } catch (err) {
    console.error(err);
  }
};
