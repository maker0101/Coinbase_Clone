import {
	TabContent,
	Button,
	InputAmountContainer,
	TableBuyInputs,
	TabFooter,
} from '..';

const TabContentBuy = () => {
	return (
		<TabContent>
			<InputAmountContainer />
			<TableBuyInputs />
			<Button size="xl">Buy</Button>
			<TabFooter textLeft="EUR balance" textRight="€2.500,00" />
		</TabContent>
	);
};

export default TabContentBuy;
