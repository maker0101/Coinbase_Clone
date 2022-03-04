import './TabBuyEmpty.css';
import { HiExclamationCircle } from 'react-icons/hi';
import { Text, Button } from '..';

const TabBuyEmpty = () => {
	return (
		<div className="TabBuyEmpty">
			<HiExclamationCircle className="TabBuyEmpty__icon" />
			<div className="TabBuyEmpty__heading">
				<Text h3>Deposit required</Text>
			</div>
			<div className="TabBuyEmpty__content">
				<Text color="grey">
					You'll need to deposit money into your fiat wallet before you can buy,
					or add a new payment method.
				</Text>
			</div>
			<Button size="xxl">Deposit Funds</Button>
		</div>
	);
};

export default TabBuyEmpty;
