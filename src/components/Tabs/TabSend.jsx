import './TabSend.css';
import { Button, InputAmountContainer, TableSendInputs, TabFooter } from '..';

const TabSend = () => {
	return (
		<div className="TabSend">
			<InputAmountContainer />
			<TableSendInputs />
			<Button size="xl">Send</Button>
			<TabFooter />
		</div>
	);
};

export default TabSend;
