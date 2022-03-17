import { useState, useEffect } from 'react';
import useAssets from './useAssets';

const useSelectAsset = () => {
  const { allCoins, allFiat } = useAssets();
  const [isSelectAssetOpen, setIsSelectAssetOpen] = useState(false);
  const [lastSelectAssetType, setLastSelectAssetType] = useState('coin');
  const [selectedCoin, setSelectedCoin] = useState(allCoins[0]);
  const [selectedCoinConvertTo, setSelectedCoinConvertTo] = useState(
    allCoins[1]
  );
  const [selectedFiat, setSelectedFiat] = useState(allFiat[0]);

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

  // TODO: Can/should I avoid reinitializing state with useEffect (doing it because state initialized empty first, because data still fetching)?
  const reInitializeSelectedCoin = (initialState) =>
    setSelectedCoin(initialState);

  useEffect(() => {
    if (!selectedCoin) reInitializeSelectedCoin(allCoins[0]);
  }, [allCoins]);

  // TODO: Can/should I avoid reinitializing state with useEffect (doing it because state initialized empty first, because data still fetching)?
  const reInitializeSelectedCoinConvertTo = (initialState) =>
    setSelectedCoinConvertTo(initialState);

  useEffect(() => {
    if (!selectedCoinConvertTo) reInitializeSelectedCoinConvertTo(allCoins[1]);
  }, [allCoins]);

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
