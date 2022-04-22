import { createContext } from 'react';
import useAssets from '../hooks/useAssets';

const AssetsContext = createContext();

const AssetsProvider = ({ children }) => {
  const { allCoins, yourCoins, coinsOnWatchlist, allFiat } = useAssets();

  return (
    <AssetsContext.Provider
      value={{ allCoins, yourCoins, coinsOnWatchlist, allFiat }}>
      {children}
    </AssetsContext.Provider>
  );
};

export { AssetsContext, AssetsProvider };
