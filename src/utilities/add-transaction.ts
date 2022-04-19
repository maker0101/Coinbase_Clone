import { Firestore, addDoc, collection } from 'firebase/firestore';

interface AddTransaction {
  (db: Firestore, transaction: object): void;
}

export const addTransaction: AddTransaction = async (db, transaction) => {
  try {
    await addDoc(collection(db, 'transactions'), transaction);
  } catch (err) {
    console.error(err);
  }
};
