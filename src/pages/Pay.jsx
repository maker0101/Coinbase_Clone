import { PAYMENTS } from '../constants/payments';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TablePayments,
	TabPay,
} from '../components';
import useMediaQuery from '../hooks/useMediaQuery';

const Pay = () => {
	let isWidthMax1150 = useMediaQuery('(max-width: 1150px)');
	let isWidthMin800 = useMediaQuery('(min-width: 800px)');

	return (
		<>
			{isWidthMin800 && (
				<ContentCenter>
					<Section width="s">
						<TabPay />
					</Section>
				</ContentCenter>
			)}
			<ContentRight>
				<Section width={isWidthMax1150 ? 's' : ''}>
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
