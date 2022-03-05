import './TabFooter.css';
import { Text } from '..';

const TabFooter = () => {
	return (
		<div className="TabFooter">
			<Text color="grey">ETH balance</Text>
			<Text color="grey">0.84447543 ETH = €1.743,45</Text>
		</div>
	);
};

export default TabFooter;
