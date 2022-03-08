import { FIAT_TRANSFERS } from '../constants/fiat-transfers';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TableFiatTransfers,
	TabDeposit,
} from '../components';
import useMediaQuery from '../hooks/useMediaQuery';

const Deposit = () => {
	let isWidthMax1150 = useMediaQuery('(max-width: 1150px)');
	let isWidthMin800 = useMediaQuery('(min-width: 800px)');

	return (
		<>
			{isWidthMin800 && (
				<ContentCenter>
					<Section width="s">
						<TabDeposit />
					</Section>
				</ContentCenter>
			)}
			<ContentRight>
				<Section width={isWidthMax1150 ? 's' : ''}>
					<SectionTitle title="Recent fiat transfers" />
					<TableFiatTransfers payments={FIAT_TRANSFERS} />
				</Section>
			</ContentRight>
		</>
	);
};

export default Deposit;
