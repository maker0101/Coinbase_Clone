import { useState, useEffect } from 'react';
import axios from 'axios';
import { YOUR_COINS } from '../constants/your-coins';
import { GET_COINS_OPTIONS } from '../constants/request-options';
import { adaptFetchedCoins } from '../utilities/adapt-fetched-coins';

const useGetCoins = () => {
  const [coins, setCoins] = useState([]);

  const fetchCoins = async (options) => {
    try {
      const response = await axios.request(options);
      const coins = await response.data.data.coins;
      return coins;
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetCoins = async (requestOptions) => {
    const fetchedCoins = await fetchCoins(requestOptions);
    const adaptedCoins = adaptFetchedCoins(fetchedCoins, YOUR_COINS);
    setCoins(adaptedCoins);
  };

  //FIXME: Terminal warning "React Hook useEffect has a missing dependency: 'handleGetCoins'."
  useEffect(() => {
    handleGetCoins(GET_COINS_OPTIONS);
  }, []);

  return { coins };
};

export default useGetCoins;
