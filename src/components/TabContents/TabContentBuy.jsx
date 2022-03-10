import {
	TabContent,
	Button,
	InputAmountContainer,
	TableInputBuy,
	TabFooter,
	TabContentSelectAsset,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentBuy = (props) => {
	return (
		<>
			{props.isSelectAssetOpen ? (
				<TabContentSelectAsset {...props} />
			) : (
				<TabContent>
					<InputAmountContainer />
					<TableInputBuy {...props} />
					<Button size="xl">Buy</Button>
					<TabFooter
						textLeft={`${props.selectedFiat.symbol} balance`}
						textRight={convertToCurrency(props.selectedFiat.balance_eur)}
					/>
				</TabContent>
			)}
		</>
	);
};

export default TabContentBuy;
