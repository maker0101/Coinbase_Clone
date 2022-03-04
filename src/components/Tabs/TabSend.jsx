import './TabSend.css';
import { Button, Text, TableSend } from '..';
import InputAmountDynamicWidth from '../Inputs/InputAmountDynamicWidth';

const TabSend = () => {
	return (
		<div className="TabSend">
			<div className="tabSend__amountWrapper">
				<span className="tabSend__amounntCurrency">€</span>
				<InputAmountDynamicWidth />
			</div>

			<div className="tabSend__table">
				<TableSend />
			</div>
			<Button size="xl">Send</Button>
			<div className="tabSend__footer">
				<Text color="grey">ETH balance</Text>
				<Text color="grey">0.84447543 ETH = €1.743,45</Text>
			</div>
		</div>
	);
};

export default TabSend;
