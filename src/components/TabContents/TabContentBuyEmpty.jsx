import './TabContentBuyEmpty.css';
import { HiExclamationCircle } from 'react-icons/hi';
import { Text, Button, TabContent } from '..';

const TabContentBuyEmpty = () => {
	return (
		<TabContent>
			<div className="tabContentBuyEmpty">
				<HiExclamationCircle className="tabContentBuyEmpty__icon" />
				<div className="tabContentBuyEmpty__heading">
					<Text h3>Deposit required</Text>
				</div>
				<div className="tabContentBuyEmpty__content">
					<Text color="grey">
						You'll need to deposit money into your fiat wallet before you can
						buy, or add a new payment method.
					</Text>
				</div>
				<Button size="xxl">Deposit Funds</Button>
			</div>
		</TabContent>
	);
};

export default TabContentBuyEmpty;
