import { RiPieChartFill } from 'react-icons/ri';

export const RECENT_TRANSACTIONS = [
	{
		name: 'Bitcoin',
		symbol: 'BTC',
		icon: <RiPieChartFill />,
		type: 'buy',
		date: 'Oct 19, 2021',
		amount: 7.432565,
	},
	{
		name: 'Ethereum',
		symbol: 'ETH',
		icon: <RiPieChartFill />,
		type: 'sell',
		date: 'Oct 21, 2021',
		amount: 2.432565,
	},
	{
		name: 'Cardano',
		symbol: 'ADA',
		icon: <RiPieChartFill />,
		type: 'convert',
		date: 'Nov 10, 2021',
		amount: 37.432565,
	},
];
