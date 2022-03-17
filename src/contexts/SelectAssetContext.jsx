import { createContext } from 'react';
import useSelectAsset from '../hooks/useSelectAsset';

const SelectAssetContext = createContext();

const SelectAssetProvider = ({ children }) => {
  const {
    isSelectAssetOpen,
    lastSelectAssetType,
    selectedCoin,
    selectedCoinConvertTo,
    selectedFiat,
    toggleIsSelectAssetOpen,
    handleSelectAssetOpenClick,
    handleSelectAsset,
    checkIsSelected,
  } = useSelectAsset();

  return (
    <SelectAssetContext.Provider
      value={{
        isSelectAssetOpen,
        lastSelectAssetType,
        selectedCoin,
        selectedCoinConvertTo,
        selectedFiat,
        toggleIsSelectAssetOpen,
        handleSelectAssetOpenClick,
        handleSelectAsset,
        checkIsSelected,
      }}>
      {children}
    </SelectAssetContext.Provider>
  );
};

export { SelectAssetContext, SelectAssetProvider };
