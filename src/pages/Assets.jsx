import { YOUR_ASSETS } from '../constants/your-assets';
import { WATCHLIST_ASSETS } from '../constants/watchlist-assets';
import { TABS_TRADE } from '../constants/tabs-trade';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TableYourAssets,
	TableAssets,
	Tab,
} from '../components';

const Assets = () => {
	return (
		<>
			<ContentCenter>
				<Section>
					<SectionTitle title="Your Assets" />
					<TableYourAssets assets={YOUR_ASSETS} />
				</Section>
				<Section>
					<SectionTitle title="Watchlist" />
					<TableAssets assets={WATCHLIST_ASSETS} />
				</Section>
			</ContentCenter>
			<ContentRight>
				<Section>
					<Tab data={TABS_TRADE} />
				</Section>
			</ContentRight>
		</>
	);
};

export default Assets;
