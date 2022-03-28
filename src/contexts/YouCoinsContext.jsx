import { createContext } from 'react';
import useAssets from '../hooks/useAssets';

const YourCoinsContext = createContext();

const YourCoinsProvider = ({ children }) => {
  const { yourCoins } = useAssets();

  return (
    <YourCoinsContext.Provider value={{ yourCoins }}>
      {children}
    </YourCoinsContext.Provider>
  );
};

export { YourCoinsContext, YourCoinsProvider };
