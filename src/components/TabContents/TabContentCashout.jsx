import {
	TabContent,
	Button,
	InputAmountContainer,
	TableInputCashout,
	TabFooter,
	TabContentSelectAsset,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentCashout = (props) => {
	return (
		<>
			{props.isSelectAssetOpen ? (
				<TabContentSelectAsset {...props} />
			) : (
				<TabContent>
					<InputAmountContainer />
					<TableInputCashout {...props} />
					<Button size="xl">Cashout</Button>
					<TabFooter
						textLeft={`${props.selectedFiat.symbol} balance`}
						textRight={convertToCurrency(props.selectedFiat.balance_eur)}
					/>
				</TabContent>
			)}
		</>
	);
};

export default TabContentCashout;
