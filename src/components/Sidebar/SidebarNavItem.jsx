import './SidebarNavItem.css';
import { Link } from 'react-router-dom';
import usePageName from '../../hooks/usePageName';
import classNames from 'classnames';

const SidebarNavItem = ({ to, icon, text }) => {
	const { pageName } = usePageName();

	const sidebarNavItemClasses = classNames({
		SidebarNavItem: true,
		'sidebarNavItem-active': pageName === text,
	});

	return (
		<Link to={to} className={sidebarNavItemClasses}>
			<div className="sidebarNavItem__circle">
				<div className="sidebarNavItem__icon">{icon}</div>
			</div>
			<div className="sidebarNavItem__text">{text}</div>
		</Link>
	);
};

export default SidebarNavItem;
