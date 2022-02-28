import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	Text,
	TableYourAssets,
	TableWatchlist,
} from '../components';

const Assets = () => {
	return (
		<>
			<ContentCenter>
				<Section>
					<SectionTitle text="Your Assets" />
					<TableYourAssets />
				</Section>
				<Section>
					<SectionTitle text="Watchlist" />
					<TableWatchlist />
				</Section>
			</ContentCenter>
			<ContentRight>
				<Section>
					<Text h1 size="xxl">
						€4,999.46
					</Text>
					<Text h1>Assets</Text>
					<Text h2>Your assets</Text>
					<Text h3>Assets</Text>
					<Text uppercase>Assets</Text>
				</Section>
			</ContentRight>
		</>
	);
};

export default Assets;
