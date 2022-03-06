import { FIAT_TRANSFERS } from '../constants/fiat-transfers';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TableFiatTransfers,
	TabDeposit,
} from '../components';

const Deposit = () => {
	return (
		<>
			<ContentCenter>
				<Section width="s">
					<TabDeposit />
				</Section>
			</ContentCenter>
			<ContentRight>
				<Section>
					<SectionTitle title="Recent fiat transfers" />
					<TableFiatTransfers payments={FIAT_TRANSFERS} />
				</Section>
			</ContentRight>
		</>
	);
};

export default Deposit;
