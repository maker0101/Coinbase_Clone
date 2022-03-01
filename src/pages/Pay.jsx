import { TABS_PAY } from '../constants/tabs-pay';
import { RECENT_TRANSACTIONS } from '../constants/recent-transactions';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TableRecentTransactions,
	Tab,
} from '../components';

const Pay = () => {
	return (
		<>
			<ContentCenter>
				<Section>
					<Tab data={TABS_PAY} />
				</Section>
			</ContentCenter>
			<ContentRight>
				<Section>
					<SectionTitle
						title="Send again"
						subtitle="Easily send to a recent destination"
					/>
					<TableRecentTransactions transactions={RECENT_TRANSACTIONS} />
				</Section>
			</ContentRight>
		</>
	);
};

export default Pay;
