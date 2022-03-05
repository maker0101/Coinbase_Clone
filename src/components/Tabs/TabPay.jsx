import { Tab, TabContentSend, TabContentReceive } from '..';

const TabPay = () => {
	const TAB_PAY_CONTENT = [
		{
			index: 1,
			name: 'Send',
			content: <TabContentSend />,
		},
		{
			index: 2,
			name: 'Receive',
			content: <TabContentReceive />,
		},
	];

	return <Tab data={TAB_PAY_CONTENT} />;
};

export default TabPay;
