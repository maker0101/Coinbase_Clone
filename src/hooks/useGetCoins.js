import { useState, useEffect } from 'react';
import axios from 'axios';
import { adaptFetchedCoins } from '../utilities/adapt-fetched-coins';
import { onSnapshot, query, collection } from 'firebase/firestore';
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
  const [allCoins, setYourCoins] = useState([]);

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

  const handleGetCoins = async (requestOptions, allCoins) => {
    const fetchedCoins = await fetchCoins(requestOptions);
    const adaptedCoins = adaptFetchedCoins(fetchedCoins, allCoins);
    setCoins(adaptedCoins);
  };

  useEffect(() => {
    fetchYourCoins(db);
  }, []);

  //FIXME: Terminal warning "React Hook useEffect has a missing dependency: 'handleGetCoins'."
  useEffect(() => {
    handleGetCoins(REQUEST_OPTIONS, allCoins);
  }, [allCoins]);

  return { coins };
};

export default useGetCoins;
