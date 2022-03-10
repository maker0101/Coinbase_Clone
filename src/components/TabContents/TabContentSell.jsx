import {
	TabContent,
	Button,
	InputAmountContainer,
	TableInputSell,
	TabFooter,
	TabContentSelectAsset,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentSell = (props) => {
	return (
		<>
			{props.isSelectAssetOpen ? (
				<TabContentSelectAsset {...props} />
			) : (
				<TabContent>
					<InputAmountContainer />
					<TableInputSell {...props} />
					<Button size="xl">Sell</Button>
					<TabFooter
						textLeft={`${props.selectedCrypto.symbol} balance`}
						textRight={`${props.selectedCrypto.balance_coin} ${
							props.selectedCrypto.symbol
						} = ${convertToCurrency(props.selectedCrypto.balance_eur)}`}
					/>
				</TabContent>
			)}
		</>
	);
};

export default TabContentSell;
