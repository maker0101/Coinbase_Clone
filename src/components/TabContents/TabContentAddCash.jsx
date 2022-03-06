import {
	TabContent,
	Button,
	InputAmountContainer,
	TableInputAddCash,
	TabFooter,
} from '..';

const TabContentAddCash = () => {
	return (
		<TabContent>
			<InputAmountContainer />
			<TableInputAddCash />
			<Button size="xl">Add cash</Button>
			<TabFooter textLeft="EUR balance" textRight="€2.500,00" />
		</TabContent>
	);
};

export default TabContentAddCash;
