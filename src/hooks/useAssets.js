import { useState } from 'react';
import { ALL_ASSETS } from '../constants/all-assets';

const useAssets = () => {
	const [assets, setAssets] = useState(ALL_ASSETS);

	const allAssets = assets.sort(
		(prev, next) => next.market_cap - prev.market_cap
	);

	const yourAssets = assets
		.filter((asset) => asset.balance_coin > 0)
		.sort((prev, next) => next.balance_eur - prev.balance_eur);

	const watchlistAssets = assets
		.filter((asset) => asset.onWatchlist)
		.sort((prev, next) => next.market_cap - prev.market_cap);

	return { allAssets, yourAssets, watchlistAssets };
};

export default useAssets;
