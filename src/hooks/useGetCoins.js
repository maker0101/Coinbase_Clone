import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { adaptFetchedCoins } from '../utilities/adapt-fetched-coins';
import axios from 'axios';
import { db } from '../firebase-config';

const REQUEST_OPTIONS = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: '5k-_VTxqtCEI',
    timePeriod: '24h',
    tiers: '1,2',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '100',
    offset: '0',
  },
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_X_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY,
  },
};

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

  const handleGetAllCoins = async (requestOptions, yourCoins) => {
    const fetchedCoins = await fetchCoins(requestOptions);
    const adaptedCoins = adaptFetchedCoins(fetchedCoins, yourCoins);
    setCoins(adaptedCoins);
  };

  useEffect(() => {
    fetchYourCoins(db);
  }, []);

  useEffect(() => {
    handleGetAllCoins(REQUEST_OPTIONS, yourCoins);
  }, [yourCoins]);

  return { coins };
};

export default useGetCoins;
