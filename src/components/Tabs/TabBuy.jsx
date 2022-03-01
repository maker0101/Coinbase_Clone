import './TabBuy.css';
import { HiExclamationCircle } from 'react-icons/hi';
import { Text, Button } from '..';

const TabBuy = () => {
	return (
		<div className="TabBuy">
			<HiExclamationCircle className="tabBuy__icon" />
			<div className="tabBuy__heading">
				<Text h3>Deposit required</Text>
			</div>
			<div className='tabBuy__content'>
				<Text color="grey">
					You'll need to deposit money into your fiat wallet before you can buy,
					or add a new payment method.
				</Text>
			</div>
			<Button size="xxl">Deposit Funds</Button>
		</div>
	);
};

export default TabBuy;
