import { Firestore, addDoc, collection } from 'firebase/firestore';

interface IaddTransaction {
  (db: Firestore, transaction: object): void;
}

export const addTransaction: IaddTransaction = async (db, transaction) => {
  try {
    await addDoc(collection(db, 'transactions'), transaction);
  } catch (err) {
    console.error(err);
  }
};
