import { useState, useEffect } from 'react';
import { onSnapshot, query, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

const useGetFiat = () => {
  const [fiat, setFiat] = useState([]);

  const fetchYourFiat = (db) => {
    const yourFiatQuery = query(collection(db, 'yourFiat'));

    return onSnapshot(yourFiatQuery, (querySnapshot) => {
      setFiat(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    fetchYourFiat(db);
  }, []);

  return { fiat };
};

export default useGetFiat;
