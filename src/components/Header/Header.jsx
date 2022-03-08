import './Header.css';
import { useState } from 'react';
import usePathName from '../../hooks/usePathName';
import useMediaQuery from '../../hooks/useMediaQuery';
import { RiAccountCircleFill } from 'react-icons/ri';
import { Button, Text, ModalPay, ModalTrade, MenuMobile, Logo } from '..';
import { IoMenuSharp } from 'react-icons/io5';

const Header = () => {
	let isWidthMin800 = useMediaQuery('(min-width: 800px)');
	const { page } = usePathName();
	const [isPayModalOpen, setIsPayModalOpen] = useState(false);
	const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);
	const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

	const openPayModal = () => setIsPayModalOpen(true);
	const openTradeModal = () => setIsTradeModalOpen(true);
	const openMenuMobile = () => setIsMenuMobileOpen(true);

	return (
		<header className="Header">
			{!isWidthMin800 && <Logo />}
			<Text h1>{page}</Text>
			{isWidthMin800 && (
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
			)}
			{!isWidthMin800 && (
				<div className="header__right">
					<IoMenuSharp className="header__menu" onClick={openMenuMobile} />
				</div>
			)}
			<ModalTrade
				isModalOpen={isTradeModalOpen}
				setIsModalOpen={setIsTradeModalOpen}
			/>
			<ModalPay
				isModalOpen={isPayModalOpen}
				setIsModalOpen={setIsPayModalOpen}
			/>

			<MenuMobile
				isMenuMobileOpen={isMenuMobileOpen}
				setIsMenuMobileOpen={setIsMenuMobileOpen}
			/>
		</header>
	);
};

export default Header;
