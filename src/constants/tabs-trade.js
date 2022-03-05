import { TabBuy, TabSell, TabConvert } from '../components';

export const TABS_TRADE = [
	{
		index: 1,
		name: 'Buy',
		content: <TabBuy />,
	},
	{
		index: 2,
		name: 'Sell',
		content: <TabSell />,
	},
	{
		index: 3,
		name: 'Convert',
		content: <TabConvert />,
	},
];
