import { TabContent, TableReceive, TabFooter } from '..';

const TabContentReceive = () => {
	return (
		<TabContent>
			<TableReceive />
			<TabFooter
				textLeft="ETH balance"
				textRight="0.84447543 ETH = €1.743,45"
			/>
		</TabContent>
	);
};

export default TabContentReceive;
