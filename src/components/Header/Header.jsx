import './Header.css';
import { RiAccountCircleFill } from 'react-icons/ri';
import { Button, Text } from '..';

const Header = ({ page }) => {
	return (
		<header className="Header">
			<Text h1>{page}</Text>
			<div className="header__right">
				<Button color="primary">Buy / Sell</Button>
				<Button color="secondary">Send / Receive</Button>
				<div className="header__verticalLine"></div>
				<RiAccountCircleFill className="header__account" />
			</div>
		</header>
	);
};

export default Header;
