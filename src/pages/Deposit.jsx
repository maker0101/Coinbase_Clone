import { PAYMENTS } from '../constants/payments';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TablePayments,
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
					<TablePayments payments={PAYMENTS} />
				</Section>
			</ContentRight>
		</>
	);
};

export default Deposit;
