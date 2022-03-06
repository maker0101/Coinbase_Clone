import {
	TabContent,
	Button,
	InputAmountContainer,
	TableInputBuy,
	TabFooter,
} from '..';

const TabContentBuy = () => {
	return (
		<TabContent>
			<InputAmountContainer />
			<TableInputBuy />
			<Button size="xl">Buy</Button>
			<TabFooter textLeft="EUR balance" textRight="€2.500,00" />
		</TabContent>
	);
};

export default TabContentBuy;
