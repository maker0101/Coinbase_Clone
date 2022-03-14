import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import {
	TabContent,
	Button,
	InputAmountContainer,
	TableInputAddCash,
	TabFooter,
	TabContentSelectAsset,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentAddCash = () => {
	const { isSelectAssetOpen, selectedFiat } = useContext(SelectAssetContext);

	return (
		<>
			{isSelectAssetOpen ? (
				<TabContentSelectAsset />
			) : (
				<TabContent>
					<InputAmountContainer />
					<TableInputAddCash />
					<Button size="xl">Add cash</Button>
					<TabFooter
						textLeft={`${selectedFiat.symbol} balance`}
						textRight={convertToCurrency(selectedFiat.balance_eur)}
					/>
				</TabContent>
			)}
		</>
	);
};

export default TabContentAddCash;
