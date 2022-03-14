import './MenuMobile.css';
import { RiPieChartFill, RiBankCardFill, RiCloseLine } from 'react-icons/ri';
import { TiChartLine } from 'react-icons/ti';
import { AiFillEuroCircle } from 'react-icons/ai';
import { SidebarNavItem } from '..';

const MenuMobile = ({ isMenuMobileOpen, setIsMenuMobileOpen }) => {
  const closeMenuMobile = () => {
    if (!setIsMenuMobileOpen) return;
    setIsMenuMobileOpen(false);
  };

  return (
    <>
      {isMenuMobileOpen && (
        <div className='MenuMobile'>
          <div className='menuMobile__navItems'>
            <div className='menuMobile__close'>
              <RiCloseLine onClick={closeMenuMobile} />
            </div>
            <SidebarNavItem
              to='/assets'
              text='Assets'
              icon={<RiPieChartFill />}
              closeMenuMobile={closeMenuMobile}
            />
            <SidebarNavItem
              to='/trade'
              text='Trade'
              icon={<TiChartLine />}
              closeMenuMobile={closeMenuMobile}
            />
            <SidebarNavItem
              to='/pay'
              text='Pay'
              icon={<RiBankCardFill />}
              closeMenuMobile={closeMenuMobile}
            />
            <SidebarNavItem
              to='/deposit'
              text='Deposit'
              icon={<AiFillEuroCircle />}
              closeMenuMobile={closeMenuMobile}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MenuMobile;
