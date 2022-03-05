import {
	TabContent,
	Button,
	InputAmountContainer,
	TableConvertInputs,
	TabFooter,
} from '..';

const TabContentConvert = () => {
	return (
		<TabContent>
			<InputAmountContainer />
			<TableConvertInputs />
			<Button size="xl">Convert</Button>
			<TabFooter
				textLeft="ETH balance"
				textRight="0.84447543 ETH = €1.743,45"
			/>
		</TabContent>
	);
};

export default TabContentConvert;
