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
		if (e?.target?.matches('.selectCryptoConvertTo, .selectCryptoConvertTo *'))
			setLastSelectAssetType('cryptoConvertTo');
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
		if (!asset.isFiat && lastSelectAssetType === 'cryptoConvertTo')
			setSelectedCryptoConvertTo(asset);
		toggleIsSelectAssetOpen();
	};

	const showCheck = (asset, assetSelected1 = {}, assetSelected2 = {}) =>
		assetSelected1?.name === asset.name || assetSelected2?.name === asset.name;

	return {
		isSelectAssetOpen,
		lastSelectAssetType,
		selectedCrypto,
		selectedCryptoConvertTo,
		selectedFiat,
		toggleIsSelectAssetOpen,
		handleSelectAssetOpenClick,
		handleSelectAsset,
		showCheck,
	};
};

export default useSelectAsset;
