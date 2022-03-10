import {
	TabContent,
	Button,
	InputAmountContainer,
	TableInputAddCash,
	TabFooter,
	TabContentSelectAsset,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentAddCash = (props) => {
	return (
		<>
			{props.isSelectAssetOpen ? (
				<TabContentSelectAsset {...props} />
			) : (
				<TabContent>
					<InputAmountContainer />
					<TableInputAddCash {...props} />
					<Button size="xl">Add cash</Button>
					<TabFooter
						textLeft={`${props.selectedFiat.symbol} balance`}
						textRight={convertToCurrency(props.selectedFiat.balance_eur)}
					/>
				</TabContent>
			)}
		</>
	);
};

export default TabContentAddCash;
