import { useState, useEffect } from 'react';
import { onSnapshot, query, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = (db) => {
    const transactionQuery = query(collection(db, 'transactions'));

    return onSnapshot(transactionQuery, (querySnapshot) => {
      setTransactions(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  };

  useEffect(() => {
    fetchTransactions(db);
  }, []);

  return { transactions };
};

export default useGetTransactions;
