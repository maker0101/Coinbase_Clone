import './Sidebar.css';

import { Logo, SidebarNavItem } from '..';
import { RiBankCardFill, RiPieChartFill } from 'react-icons/ri';

import { AiFillEuroCircle } from 'react-icons/ai';
import { TiChartLine } from 'react-icons/ti';

const Sidebar = () => {
  return (
    <nav className='Sidebar'>
      <Logo />
      <div className='sidebar__nav'>
        <SidebarNavItem to='/assets' text='Assets' icon={<RiPieChartFill />} />
        <SidebarNavItem to='/trade' text='Trade' icon={<TiChartLine />} />
        <SidebarNavItem to='/pay' text='Pay' icon={<RiBankCardFill />} />
        <SidebarNavItem
          to='/deposit'
          text='Deposit'
          icon={<AiFillEuroCircle />}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
