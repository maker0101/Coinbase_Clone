import { Tab, TabContentSend, TabContentReceive } from '..';
import useSelectAsset from '../../hooks/useSelectAsset';

const TabPay = () => {
	const selectedAsset = useSelectAsset();

	const TAB_PAY_CONTENT = [
		{
			index: 1,
			name: 'Send',
			content: <TabContentSend {...selectedAsset} />,
		},
		{
			index: 2,
			name: 'Receive',
			content: <TabContentReceive {...selectedAsset} />,
		},
	];

	return <Tab data={TAB_PAY_CONTENT} />;
};

export default TabPay;
