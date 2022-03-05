import './TabSend.css';
import { Button, InputAmountContainer, TableSendInputs, TabFooter } from '..';

const TabSend = () => {
	return (
		<div className="TabSend">
			<InputAmountContainer />
			<TableSendInputs />
			<Button size="xl">Send</Button>
			<TabFooter
				textLeft="ETH balance"
				textRight="0.84447543 ETH = €1.743,45"
			/>
		</div>
	);
};

export default TabSend;
