import {
	TabContent,
	Button,
	InputAmountContainer,
	TableInputSell,
	TabFooter,
} from '..';

const TabContentSell = () => {
	return (
		<TabContent>
			<InputAmountContainer />
			<TableInputSell />
			<Button size="xl">Sell</Button>
			<TabFooter
				textLeft="ETH balance"
				textRight="0.84447543 ETH = €1.743,45"
			/>
		</TabContent>
	);
};

export default TabContentSell;
