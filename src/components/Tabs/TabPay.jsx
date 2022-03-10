import { Tab, TabContentSend, TabContentReceive } from '..';
import useSelectAsset from '../../hooks/useSelectAsset';

const TabPay = () => {
	const useSelectAssetObj = useSelectAsset();

	const TAB_PAY_CONTENT = [
		{
			index: 1,
			name: 'Send',
			content: <TabContentSend {...useSelectAssetObj} />,
		},
		{
			index: 2,
			name: 'Receive',
			content: <TabContentReceive {...useSelectAssetObj} />,
		},
	];

	return <Tab data={TAB_PAY_CONTENT} />;
};

export default TabPay;
