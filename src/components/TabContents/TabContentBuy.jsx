import {
	TabContent,
	Button,
	InputAmountContainer,
	TableInputBuy,
	TabFooter,
	TabContentSelectAsset,
	TabContentBuyEmpty,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';
import { calculateBalanceTotal } from '../../utilities/calculate-balance-total';
import useAssets from '../../hooks/useAssets';

const TabContentBuy = (props) => {
	const { allFiat } = useAssets();
	const hasNoFiat = Boolean(!calculateBalanceTotal(allFiat));

	if (hasNoFiat) {
		return <TabContentBuyEmpty />;
	} else if (props.isSelectAssetOpen) {
		return <TabContentSelectAsset {...props} />;
	} else {
		return (
			<TabContent>
				<InputAmountContainer />
				<TableInputBuy {...props} />
				<Button size="xl">{`Buy ${props.selectedCrypto.name}`}</Button>
				<TabFooter
					textLeft={`${props.selectedFiat.symbol} balance`}
					textRight={convertToCurrency(props.selectedFiat.balance_eur)}
				/>
			</TabContent>
		);
	}
};

export default TabContentBuy;
