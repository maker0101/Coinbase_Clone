import { Tab, TabContentAddCash, TabContentCashout } from '..';

const TabDeposit = () => {
	const TAB_DEPOSIT_CONTENT = [
		{
			index: 1,
			name: 'Add cash',
			content: <TabContentAddCash />,
		},
		{
			index: 2,
			name: 'Cashout',
			content: <TabContentCashout />,
		},
	];

	return <Tab data={TAB_DEPOSIT_CONTENT} />;
};

export default TabDeposit;
