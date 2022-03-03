import './Header.css';
import { useState } from 'react';
import usePathName from '../../hooks/usePathName';
import { RiAccountCircleFill } from 'react-icons/ri';
import { Button, Text, ModalPay, ModalTrade } from '..';

const Header = () => {
	const { page } = usePathName();
	const [isPayModalOpen, setIsPayModalOpen] = useState(false);
	const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);

	const openPayModal = () => setIsPayModalOpen(true);
	const openTradeModal = () => setIsTradeModalOpen(true);

	console.log(isTradeModalOpen);

	return (
		<header className="Header">
			<Text h1>{page}</Text>
			<div className="header__right">
				<Button color="primary" onClick={openTradeModal}>
					Buy / Sell
				</Button>
				<Button color="secondary" onClick={openPayModal}>
					Send / Receive
				</Button>
				<div className="header__verticalLine"></div>
				<RiAccountCircleFill className="header__account" />
			</div>
			<ModalTrade
				isModalOpen={isTradeModalOpen}
				setIsModalOpen={setIsTradeModalOpen}
			/>
			<ModalPay
				isModalOpen={isPayModalOpen}
				setIsModalOpen={setIsPayModalOpen}
			/>
		</header>
	);
};

export default Header;
