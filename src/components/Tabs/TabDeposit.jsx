import { Tab, TabContentAddCash, TabContentCashout } from '..';
import useSelectAsset from '../../hooks/useSelectAsset';

const TabDeposit = () => {
	const selectedAsset = useSelectAsset();

	const TAB_DEPOSIT_CONTENT = [
		{
			index: 1,
			name: 'Add cash',
			content: <TabContentAddCash {...selectedAsset} />,
		},
		{
			index: 2,
			name: 'Cashout',
			content: <TabContentCashout {...selectedAsset} />,
		},
	];

	return <Tab data={TAB_DEPOSIT_CONTENT} />;
};

export default TabDeposit;
