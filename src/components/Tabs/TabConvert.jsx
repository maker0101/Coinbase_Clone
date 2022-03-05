import './TabSend.css';
import {
	Button,
	InputAmountContainer,
	TableConvertInputs,
	TabFooter,
} from '..';

const TabConvert = () => {
	return (
		<div className="TabConvert">
			<InputAmountContainer />
			<TableConvertInputs />
			<Button size="xl">Convert</Button>
			<TabFooter
				textLeft="ETH balance"
				textRight="0.84447543 ETH = €1.743,45"
			/>
		</div>
	);
};

export default TabConvert;
