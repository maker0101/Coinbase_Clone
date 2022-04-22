import { useContext, useEffect, useState } from 'react';

import { AssetsContext } from '../contexts/AssetsContext';

const useSelectAsset = () => {
  const { allCoins, allFiat } = useContext(AssetsContext);
  const [isSelectAssetOpen, setIsSelectAssetOpen] = useState(false);
  const [lastSelectAssetType, setLastSelectAssetType] = useState('coin');
  const [selectedFiat, setSelectedFiat] = useState(allFiat[0]);
  const [selectedCoin, setSelectedCoin] = useState(allCoins[0]);
  const [selectedCoinConvertTo, setSelectedCoinConvertTo] = useState(
    allCoins[1]
  );

  const setSelectAssetType = (e) => {
    if (e?.target?.matches('.selectFiat, .selectFiat *'))
      setLastSelectAssetType('fiat');
    if (e?.target?.matches('.selectCoin, .selectCoin *'))
      setLastSelectAssetType('coin');
    if (e?.target?.matches('.selectCoinConvertTo, .selectCoinConvertTo *'))
      setLastSelectAssetType('coinConvertTo');
  };

  const toggleIsSelectAssetOpen = () =>
    setIsSelectAssetOpen(() => !isSelectAssetOpen);

  const handleSelectAssetOpenClick = (e) => {
    setSelectAssetType(e);
    toggleIsSelectAssetOpen();
  };

  const handleSelectAsset = (asset, lastSelectAssetType) => {
    if (asset.isFiat) setSelectedFiat(asset);
    if (!asset.isFiat && lastSelectAssetType === 'coin') setSelectedCoin(asset);
    if (!asset.isFiat && lastSelectAssetType === 'coinConvertTo')
      setSelectedCoinConvertTo(asset);
    toggleIsSelectAssetOpen();
  };

  const checkIsSelected = (asset, assetSelected1 = {}, assetSelected2 = {}) =>
    assetSelected1?.symbol === asset.symbol ||
    assetSelected2?.symbol === asset.symbol;

  useEffect(() => {
    setSelectedCoin(allCoins[0]);
    setSelectedCoinConvertTo(allCoins[1]);
    setSelectedFiat(allFiat[0]);
  }, [allCoins, allFiat]);

  return {
    isSelectAssetOpen,
    lastSelectAssetType,
    selectedCoin,
    selectedCoinConvertTo,
    selectedFiat,
    toggleIsSelectAssetOpen,
    handleSelectAssetOpenClick,
    handleSelectAsset,
    checkIsSelected,
  };
};

export default useSelectAsset;
