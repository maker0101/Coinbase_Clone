import './TabReceive.css';
import { TableReceive, TabFooter } from '..';

const TabReceive = () => {
	return (
		<div className="TabReceive">
			<TableReceive />
			<TabFooter
				textLeft="ETH balance"
				textRight="0.84447543 ETH = €1.743,45"
			/>
		</div>
	);
};

export default TabReceive;
