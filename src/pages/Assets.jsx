import { useState } from 'react';
import { YOUR_ASSETS } from '../constants/your-assets';
import { WATCHLIST_ASSETS } from '../constants/watchlist-assets';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TableYourAssets,
	TableAssets,
	Tabs,
} from '../components';

const Assets = () => {
	const [yourAssets] = useState(YOUR_ASSETS);
	const [watchlistAssets] = useState(WATCHLIST_ASSETS);

	return (
		<>
			<ContentCenter>
				<Section>
					<SectionTitle text="Your Assets" />
					<TableYourAssets assets={yourAssets} />
				</Section>
				<Section>
					<SectionTitle text="Watchlist" />
					<TableAssets assets={watchlistAssets} />
				</Section>
			</ContentCenter>
			<ContentRight>
				<Section>
					<Tabs />
				</Section>
			</ContentRight>
		</>
	);
};

export default Assets;
