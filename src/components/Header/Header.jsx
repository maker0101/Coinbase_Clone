import './Header.css';
import usePageName from '../../hooks/usePageName';
import { RiAccountCircleFill } from 'react-icons/ri';
import { Button, Text } from '..';

const Header = () => {
	const { pageName } = usePageName();

	return (
		<header className="Header">
			<Text h1>{pageName}</Text>
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
