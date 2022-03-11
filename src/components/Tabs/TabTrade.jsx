import { Tab, TabContentBuy, TabContentSell, TabContentConvert } from '..';
import useSelectAsset from '../../hooks/useSelectAsset';

const TabTrade = () => {
	const selectedAsset = useSelectAsset();

	const TAB_TRADE_CONTENT = [
		{
			index: 1,
			name: 'Buy',
			content: <TabContentBuy {...selectedAsset} />,
		},
		{
			index: 2,
			name: 'Sell',
			content: <TabContentSell {...selectedAsset} />,
		},
		{
			index: 3,
			name: 'Convert',
			content: <TabContentConvert {...selectedAsset} />,
		},
	];

	return <Tab data={TAB_TRADE_CONTENT} />;
};

export default TabTrade;
