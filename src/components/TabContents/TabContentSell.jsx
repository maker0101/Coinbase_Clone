import {
	TabContent,
	Button,
	InputAmountContainer,
	TableSellInputs,
	TabFooter,
} from '..';

const TabContentSell = () => {
	return (
		<TabContent>
			<InputAmountContainer />
			<TableSellInputs />
			<Button size="xl">Sell</Button>
			<TabFooter
				textLeft="ETH balance"
				textRight="0.84447543 ETH = €1.743,45"
			/>
		</TabContent>
	);
};

export default TabContentSell;
