import './TabSend.css';
import { Button, InputAmountContainer, TableBuyInputs, TabFooter } from '..';

const TabBuy = () => {
	return (
		<div className="TabBuy">
			<InputAmountContainer />
			<TableBuyInputs />
			<Button size="xl">Buy</Button>
			<TabFooter textLeft="EUR balance" textRight="€2.500,00" />
		</div>
	);
};

export default TabBuy;
