import { TabContent, TableReceive, TabFooter, TabContentSelectAsset } from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentReceive = (props) => {
	return (
		<>
			{props.isSelectAssetOpen ? (
				<TabContentSelectAsset {...props} />
			) : (
				<TabContent>
					<TableReceive {...props} />
					<TabFooter
						marginTop={0}
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

export default TabContentReceive;
