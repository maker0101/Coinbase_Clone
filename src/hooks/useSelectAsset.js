import { useState } from 'react';
import useAssets from './useAssets';

const useSelectAsset = () => {
	const { allCrypto, allFiat } = useAssets();
	const [isSelectAssetOpen, setIsSelectAssetOpen] = useState(false);
	const [lastSelectAssetType, setLastSelectAssetType] = useState('crypto');
	const [selectedCrypto, setSelectedCrypto] = useState(allCrypto[0]);
	const [selectedFiat, setSelectedFiat] = useState(allFiat[0]);

	const setSelectAssetType = (e) => {
		if (e?.target?.matches('.selectFiat, .selectFiat *'))
			setLastSelectAssetType('fiat');
		if (e?.target?.matches('.selectCrypto, .selectCrypto *'))
			setLastSelectAssetType('crypto');
	};

	const toggleIsSelectAssetOpen = () =>
		setIsSelectAssetOpen(() => !isSelectAssetOpen);

	const handleSelectAssetOpenClick = (e) => {
		setSelectAssetType(e);
		toggleIsSelectAssetOpen();
	};

	const handleSelectAsset = (asset) => {
		asset.isFiat ? setSelectedFiat(asset) : setSelectedCrypto(asset);
		toggleIsSelectAssetOpen();
	};

	const showCheck = (asset, selectedCrypto = {}, selectedFiat = {}) =>
		selectedCrypto?.name === asset.name || selectedFiat?.name === asset.name;

	return {
		isSelectAssetOpen,
		lastSelectAssetType,
		selectedCrypto,
		selectedFiat,
		toggleIsSelectAssetOpen,
		handleSelectAssetOpenClick,
		handleSelectAsset,
		showCheck,
	};
};

export default useSelectAsset;
