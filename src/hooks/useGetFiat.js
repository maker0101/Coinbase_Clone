import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

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
