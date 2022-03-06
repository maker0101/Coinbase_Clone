import {
	TabContent,
  Button,
	InputAmountContainer,
  TableInputCashout,
	TabFooter,
} from '..';

const TabContentCashout = () => {
	return (
		<TabContent>
			<InputAmountContainer />
			<TableInputCashout />
			<Button size="xl">Cashout</Button>
			<TabFooter textLeft="EUR balance" textRight="€2.500,00" />
		</TabContent>
	);
};

export default TabContentCashout;
