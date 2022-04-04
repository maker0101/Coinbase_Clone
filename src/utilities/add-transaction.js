import { addDoc, collection } from 'firebase/firestore';

export const addTransaction = async (db, transaction) => {
  try {
    await addDoc(collection(db, 'transactions'), transaction);
  } catch (err) {
    console.error(err);
  }
};
