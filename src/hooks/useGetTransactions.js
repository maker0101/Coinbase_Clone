import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

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
