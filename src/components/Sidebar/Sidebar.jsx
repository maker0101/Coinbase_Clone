import './Sidebar.css';
import { RiPieChartFill, RiBankCardFill } from 'react-icons/ri';
import { TiChartLine } from 'react-icons/ti';
import SidebarNavItem from './SidebarNavItem';

const Sidebar = () => {
	return (
		<nav className="Sidebar">
			<div className="sidebar__logo">coinbase</div>
			<div className="sidebar__nav">
				<SidebarNavItem to="/assets" text="Assets" icon={<RiPieChartFill />} />
				<SidebarNavItem to="/trade" text="Trade" icon={<TiChartLine />} />
				<SidebarNavItem to="/pay" text="Pay" icon={<RiBankCardFill />} />
			</div>
		</nav>
	);
};

export default Sidebar;
