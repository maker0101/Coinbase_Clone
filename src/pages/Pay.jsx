import { PAYMENTS } from '../constants/payments';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TablePayments,
	TabPay,
} from '../components';

const Pay = () => {
	return (
		<>
			<ContentCenter>
				<Section width="s">
					<TabPay />
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
