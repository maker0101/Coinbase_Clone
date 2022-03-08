import { useState } from 'react';
import { Button, ModalPay, ModalTrade, ModalDeposit } from '..';
import './Footer.css';
import usePathName from '../../hooks/usePathName';

const Footer = () => {
	const { page } = usePathName();
	const [isPayModalOpen, setIsPayModalOpen] = useState(false);
	const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);
	const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

	const openPayModal = () => setIsPayModalOpen(true);
	const openTradeModal = () => setIsTradeModalOpen(true);
	const openDepositModal = () => setIsDepositModalOpen(true);

	return (
		<div className="Footer">
			{['Assets', 'Trade'].includes(page) && (
				<>
					<Button onClick={openTradeModal} stretch>
						Buy
					</Button>
					<Button onClick={openTradeModal} stretch>
						Sell
					</Button>
				</>
			)}
			{page === 'Pay' && (
				<>
					<Button onClick={openPayModal} stretch>
						Send
					</Button>
					<Button onClick={openPayModal} stretch>
						Receive
					</Button>
				</>
			)}
			{page === 'Deposit' && (
				<>
					<Button onClick={openDepositModal} stretch>
						Add cash
					</Button>
					<Button onClick={openDepositModal} stretch>
						Cashout
					</Button>
				</>
			)}

			<ModalTrade
				isModalOpen={isTradeModalOpen}
				setIsModalOpen={setIsTradeModalOpen}
			/>
			<ModalPay
				isModalOpen={isPayModalOpen}
				setIsModalOpen={setIsPayModalOpen}
			/>
			<ModalDeposit
				isModalOpen={isDepositModalOpen}
				setIsModalOpen={setIsDepositModalOpen}
			/>
		</div>
	);
};

export default Footer;
