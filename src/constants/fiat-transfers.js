import { RiPieChartFill } from 'react-icons/ri';

export const FIAT_TRANSFERS = [
	{
		id: 1,
		adress: 'satoshi@gmail.com',
		name: 'Euro',
		symbol: 'EUR',
		icon: <RiPieChartFill />,
		type: 'deposit',
		date: 'Oct 19, 2021',
		amount: 400,
	},
	{
		id: 2,
		adress: 'elon.musk@yahoo.com',
		name: 'Euro',
		symbol: 'EUR',
		icon: <RiPieChartFill />,
		type: 'deposit',
		date: 'Oct 21, 2021',
		amount: 1700,
	},
	{
		id: 3,
		adress: 'vitalik@buterin.com',
		name: 'Euro',
		symbol: 'EUR',
		icon: <RiPieChartFill />,
		type: 'withdraw',
		date: 'Nov 03, 2021',
		amount: 700,
	},
];
