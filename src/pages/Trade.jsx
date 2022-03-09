import './Trade.css';
import { RECENT_TRANSACTIONS } from '../constants/recent-transactions';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TableAssets,
	TableRecentTransactions,
	Search,
	Dropdown,
	TabTrade,
} from '../components';
import useMediaQuery from '../hooks/useMediaQuery';
import useAssets from '../hooks/useAssets';

const Trade = () => {
	let isWidthMin1150 = useMediaQuery('(min-width: 1150px)');
	let isWidthMin800 = useMediaQuery('(min-width: 800px)');
	const { allAssets } = useAssets();

	const OPTIONS_TIME = ['1d', '1w', '1m', '1y'];
	const ASSET_TYPE = ['All assets', 'Watchlist'];

	return (
		<>
			<ContentCenter>
				<Section>
					<SectionTitle title="All Assets" noBorderBottom />
					<div className="trade__searchFilterRow">
						<Search />
						{isWidthMin800 && (
							<div className="trade__filters">
								<Dropdown
									name="timeframe"
									options={OPTIONS_TIME}
									initialValue="1d"
								/>
								<Dropdown
									name="assetType"
									options={ASSET_TYPE}
									initialValue="Tradeable Assets"
								/>
							</div>
						)}
					</div>
					<TableAssets assets={allAssets} />
				</Section>
			</ContentCenter>
			<ContentRight>
				{isWidthMin1150 && (
					<Section>
						<TabTrade />
					</Section>
				)}
				<Section>
					<SectionTitle title="Recent transactions" />
					<TableRecentTransactions transactions={RECENT_TRANSACTIONS} />
				</Section>
			</ContentRight>
		</>
	);
};

export default Trade;
