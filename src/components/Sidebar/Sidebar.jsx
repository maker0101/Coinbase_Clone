import './Sidebar.css';
import { RiPieChartFill, RiBankCardFill } from 'react-icons/ri';
import { TiChartLine } from 'react-icons/ti';
import SidebarLogo from './SidebarLogo';
import SidebarNav from './SidebarNav';
import SidebarNavItem from './SidebarNavItem';

const Sidebar = () => {
	return (
		<nav className="Sidebar">
			<SidebarLogo />
			<SidebarNav>
				<SidebarNavItem to="/assets" text="Assets" icon={<RiPieChartFill />} />
				<SidebarNavItem to="/trade" text="Trade" icon={<TiChartLine />} />
				<SidebarNavItem to="/pay" text="Pay" icon={<RiBankCardFill />} />
			</SidebarNav>
		</nav>
	);
};

export default Sidebar;
