import {
	TabContent,
	Button,
	InputAmountContainer,
	TableInputConvert,
	TabFooter,
	TabContentSelectAsset,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentConvert = (props) => {
	return (
		<>
			{props.isSelectAssetOpen ? (
				<TabContentSelectAsset {...props} />
			) : (
				<TabContent>
					<InputAmountContainer />
					<TableInputConvert {...props} />
					<Button size="xl">{`Convert ${props.selectedCrypto.name}`}</Button>
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

export default TabContentConvert;
