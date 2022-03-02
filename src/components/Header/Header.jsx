import './Header.css';
import useGetPageName from '../../hooks/useGetPageName';
import { RiAccountCircleFill } from 'react-icons/ri';
import { Button, Text } from '..';

const Header = () => {
	const { pageName } = useGetPageName();

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
