import { useState } from 'react';
import { YOUR_ASSETS } from '../constants/your-assets';
import { WATCHLIST } from '../constants/watchlist';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TableYourAssets,
	TableAssets,
} from '../components';

const Assets = () => {
	const [yourAssets] = useState(YOUR_ASSETS);
	const [watchingAssets] = useState(WATCHLIST);

	return (
		<>
			<ContentCenter>
				<Section>
					<SectionTitle text="Your Assets" />
					<TableYourAssets assets={yourAssets} />
				</Section>
				<Section>
					<SectionTitle text="Watchlist" />
					<TableAssets assets={watchingAssets} />
				</Section>
			</ContentCenter>
			<ContentRight>
				<Section></Section>
			</ContentRight>
		</>
	);
};

export default Assets;
