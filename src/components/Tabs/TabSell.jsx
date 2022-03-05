import './TabSend.css';
import { Button, InputAmountContainer, TableSellInputs, TabFooter } from '..';

const TabSell = () => {
	return (
		<div className="TabSell">
			<InputAmountContainer />
			<TableSellInputs />
			<Button size="xl">Sell</Button>
			<TabFooter
				textLeft="ETH balance"
				textRight="0.84447543 ETH = €1.743,45"
			/>
		</div>
	);
};

export default TabSell;
