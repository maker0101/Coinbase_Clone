import { TABS_PAY } from '../constants/tabs-pay';
import { PAYMENTS } from '../constants/payments';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TablePayments,
	Tab,
} from '../components';

const Pay = () => {
	return (
		<>
			<ContentCenter>
				<Section width="s">
					<Tab data={TABS_PAY} />
				</Section>
			</ContentCenter>
			<ContentRight>
				<Section>
					<SectionTitle
						title="Send again"
						subtitle="Easily send to a recent destination"
					/>
					<TablePayments payments={PAYMENTS} />
				</Section>
			</ContentRight>
		</>
	);
};

export default Pay;
