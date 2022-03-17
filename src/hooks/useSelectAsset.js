import { useState } from 'react';
import useAssets from './useAssets';

const useSelectAsset = () => {
  const { allCrypto, allFiat } = useAssets();
  const [isSelectAssetOpen, setIsSelectAssetOpen] = useState(false);
  const [lastSelectAssetType, setLastSelectAssetType] = useState('crypto');
  const [selectedCrypto, setSelectedCrypto] = useState(allCrypto[0]);
  const [selectedCryptoConvertTo, setSelectedCryptoConvertTo] = useState(
    allCrypto[1]
  );
  const [selectedFiat, setSelectedFiat] = useState(allFiat[0]);

  const setSelectAssetType = (e) => {
    if (e?.target?.matches('.selectFiat, .selectFiat *'))
      setLastSelectAssetType('fiat');
    if (e?.target?.matches('.selectCrypto, .selectCrypto *'))
      setLastSelectAssetType('crypto');
    if (e?.target?.matches('.selectCrypToConvertTo, .selectCrypToConvertTo *'))
      setLastSelectAssetType('crypToConvertTo');
  };

  const toggleIsSelectAssetOpen = () =>
    setIsSelectAssetOpen(() => !isSelectAssetOpen);

  const handleSelectAssetOpenClick = (e) => {
    setSelectAssetType(e);
    toggleIsSelectAssetOpen();
  };

  const handleSelectAsset = (asset, lastSelectAssetType) => {
    if (asset.isFiat) setSelectedFiat(asset);
    if (!asset.isFiat && lastSelectAssetType === 'crypto')
      setSelectedCrypto(asset);
    if (!asset.isFiat && lastSelectAssetType === 'crypToConvertTo')
      setSelectedCryptoConvertTo(asset);
    toggleIsSelectAssetOpen();
  };

  const checkIsSelected = (asset, assetSelected1 = {}, assetSelected2 = {}) =>
    assetSelected1?.symbol === asset.symbol ||
    assetSelected2?.symbol === asset.symbol;

  return {
    isSelectAssetOpen,
    lastSelectAssetType,
    selectedCrypto,
    selectedCryptoConvertTo,
    selectedFiat,
    toggleIsSelectAssetOpen,
    handleSelectAssetOpenClick,
    handleSelectAsset,
    checkIsSelected,
  };
};

export default useSelectAsset;
