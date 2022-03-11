import {
	TabContent,
	Button,
	InputAmountContainer,
	TableInputSend,
	TabFooter,
	TabContentSelectAsset,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentSend = (props) => {
	return (
		<>
			{props.isSelectAssetOpen ? (
				<TabContentSelectAsset {...props} />
			) : (
				<TabContent>
					<InputAmountContainer />
					<TableInputSend {...props} />
					<Button size="xl">{`Send ${props.selectedCrypto.name}`}</Button>
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

export default TabContentSend;
