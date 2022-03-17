import { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_COINS_OPTIONS } from '../constants/request-options';
import { adaptFetchedCoins } from '../utilities/adapt-fetched-coins';
import { onSnapshot, query, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

const useGetCoins = () => {
  const [coins, setCoins] = useState([]);
  const [yourCoins, setYourCoins] = useState([]);

  const fetchCoins = async (options) => {
    try {
      const response = await axios.request(options);
      const coins = await response.data.data.coins;
      return coins;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchYourCoins = (db) => {
    const yourCoinsQuery = query(collection(db, 'yourCoins'));

    return onSnapshot(yourCoinsQuery, (querySnapshot) => {
      setYourCoins(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  };

  const handleGetCoins = async (requestOptions, yourCoins) => {
    const fetchedCoins = await fetchCoins(requestOptions);
    const adaptedCoins = adaptFetchedCoins(fetchedCoins, yourCoins);
    setCoins(adaptedCoins);
  };

  useEffect(() => {
    fetchYourCoins(db);
  }, []);

  //FIXME: Terminal warning "React Hook useEffect has a missing dependency: 'handleGetCoins'."
  useEffect(() => {
    handleGetCoins(GET_COINS_OPTIONS, yourCoins);
  }, [yourCoins]);

  return { coins };
};

export default useGetCoins;
