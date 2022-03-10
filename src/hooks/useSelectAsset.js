import { useState } from 'react';
import useAssets from './useAssets';

const useSelectAsset = () => {
	const { allAssets } = useAssets();
	const [isSelectAssetOpen, setIsSelectAssetOpen] = useState(false);
	const [selectedAsset, setSelectedAsset] = useState(allAssets[0]);

	console.log(selectedAsset);

	const toggleIsSelectAssetOpen = () =>
		setIsSelectAssetOpen(() => !isSelectAssetOpen);

	const handleSelectAsset = (asset) => {
		setSelectedAsset(asset);
		toggleIsSelectAssetOpen();
	};

	return {
		isSelectAssetOpen,
		selectedAsset,
		setSelectedAsset,
		toggleIsSelectAssetOpen,
		handleSelectAsset,
	};
};

export default useSelectAsset;
