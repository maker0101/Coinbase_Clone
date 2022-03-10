import { Tab, TabContentBuy, TabContentSell, TabContentConvert } from '..';
import useSelectAsset from '../../hooks/useSelectAsset';

const TabTrade = () => {
	const useSelectAssetObj = useSelectAsset();

	const TAB_TRADE_CONTENT = [
		{
			index: 1,
			name: 'Buy',
			content: <TabContentBuy {...useSelectAssetObj} />,
		},
		{
			index: 2,
			name: 'Sell',
			content: <TabContentSell />,
		},
		{
			index: 3,
			name: 'Convert',
			content: <TabContentConvert />,
		},
	];

	return <Tab data={TAB_TRADE_CONTENT} />;
};

export default TabTrade;
