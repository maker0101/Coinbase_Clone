import './SidebarNavItem.css';
import { Link } from 'react-router-dom';
import usePathName from '../../hooks/usePathName';
import classNames from 'classnames';

const SidebarNavItem = ({ to, icon, text }) => {
	const { page } = usePathName();

	const sidebarNavItemClasses = classNames({
		SidebarNavItem: true,
		'sidebarNavItem-active': page === text,
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
