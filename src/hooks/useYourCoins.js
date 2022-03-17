import { useState, useEffect } from 'react';
import { onSnapshot, query, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

const useYourCoins = () => {
  const [yourDbCoins, setYourDbCoins] = useState([]);

  const fetchYourCoins = (db) => {
    const yourCoinsQuery = query(collection(db, 'yourCoins'));

    return onSnapshot(yourCoinsQuery, (querySnapshot) => {
      setYourDbCoins(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  };

  useEffect(() => {
    fetchYourCoins(db);
  }, []);

  return { yourDbCoins };
};

export default useYourCoins;
