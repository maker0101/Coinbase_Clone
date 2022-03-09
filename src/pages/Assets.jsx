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
import useAssets from '../hooks/useAssets';

const Assets = () => {
	let isWidthMin1150 = useMediaQuery('(min-width: 1150px)');
	const { yourAssets, watchlistAssets } = useAssets();

	return (
		<>
			<ContentCenter>
				<Section>
					<ChartPortfolio />
				</Section>
				<Section>
					<SectionTitle title="Your Assets" />
					<TableYourAssets assets={yourAssets} />
				</Section>
				<Section>
					<SectionTitle title="Watchlist" />
					<TableAssets assets={watchlistAssets} />
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
