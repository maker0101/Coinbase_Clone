import { YOUR_ASSETS } from '../constants/your-assets';
import { WATCHLIST_ASSETS } from '../constants/watchlist-assets';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TableYourAssets,
	TableAssets,
	TabTrade,
	ChartPortfolio,
} from '../components';
import useMediaQuery from '../hooks/useMediaQuery';

const Assets = () => {
	let isWidthMin1150 = useMediaQuery('(min-width: 1150px)');

	return (
		<>
			<ContentCenter>
				<Section>
					<ChartPortfolio />
				</Section>
				<Section>
					<SectionTitle title="Your Assets" />
					<TableYourAssets assets={YOUR_ASSETS} />
				</Section>
				<Section>
					<SectionTitle title="Watchlist" />
					<TableAssets assets={WATCHLIST_ASSETS} />
				</Section>
			</ContentCenter>
			{isWidthMin1150 && (
				<ContentRight>
					<Section>
						<TabTrade />
					</Section>
				</ContentRight>
			)}
		</>
	);
};

export default Assets;
