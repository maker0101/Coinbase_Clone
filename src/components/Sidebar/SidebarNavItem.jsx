import './SidebarNavItem.css';
import { Link } from 'react-router-dom';
import SidebarNavItemCircle from './SidebarNavItemCircle';
import SidebarNavItemIcon from './SidebarNavItemIcon';
import SidebarNavItemText from './SidebarNavItemText';

const SidebarNavItem = (props) => {
	return (
		<Link to={props.to} className="SidebarNavItem">
			<SidebarNavItemCircle>
				<SidebarNavItemIcon icon={props.icon} />
			</SidebarNavItemCircle>
			<SidebarNavItemText>{props.text}</SidebarNavItemText>
		</Link>
	);
};

export default SidebarNavItem;
