import {
	TabContent,
	Button,
	InputAmountContainer,
	TableSendInputs,
	TabFooter,
} from '..';

const TabContentSend = () => {
	return (
		<TabContent>
			<InputAmountContainer />
			<TableSendInputs />
			<Button size="xl">Send</Button>
			<TabFooter
				textLeft="ETH balance"
				textRight="0.84447543 ETH = €1.743,45"
			/>
		</TabContent>
	);
};

export default TabContentSend;
