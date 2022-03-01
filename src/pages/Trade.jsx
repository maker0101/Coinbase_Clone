import './Trade.css';
import { ALL_ASSETS } from '../constants/all-assets';
import { RECENT_TRANSACTIONS } from '../constants/recent-transactions';
import { TABS_TRADE } from '../constants/tabs-trade';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TableAssets,
	TableRecentTransactions,
	Search,
	Dropdown,
	Tab,
} from '../components';
import { OPTIONS_TIME } from '../constants/options-time';
import { ASSET_TYPE } from '../constants/asset-type';

const Trade = () => {
	return (
		<>
			<ContentCenter>
				<Section>
					<SectionTitle title="All Assets" noBorderBottom />
					<div className="trade__searchFilterRow">
						<Search />
						<div className="trade__filters">
							<Dropdown name="timeframe" options={OPTIONS_TIME} />
							<Dropdown name="assetType" options={ASSET_TYPE} />
						</div>
					</div>
					<TableAssets assets={ALL_ASSETS} />
				</Section>
			</ContentCenter>
			<ContentRight>
				<Section>
					<Tab data={TABS_TRADE} />
				</Section>
				<Section>
					<SectionTitle title="Recent transactions" />
					<TableRecentTransactions transactions={RECENT_TRANSACTIONS} />
				</Section>
			</ContentRight>
		</>
	);
};

export default Trade;
