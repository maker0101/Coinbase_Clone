import './MenuMobile.css';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { RiPieChartFill, RiBankCardFill, RiCloseLine } from 'react-icons/ri';
import { TiChartLine } from 'react-icons/ti';
import { AiFillEuroCircle } from 'react-icons/ai';
import { SidebarNavItem } from '..';

const MenuMobile = () => {
  const { isOpen, handleClose } = useContext(ModalContext);

  return (
    <>
      {isOpen && (
        <div className='MenuMobile'>
          <div className='menuMobile__navItems'>
            <div className='menuMobile__close'>
              <RiCloseLine onClick={handleClose} />
            </div>
            <SidebarNavItem
              to='/assets'
              text='Assets'
              icon={<RiPieChartFill />}
            />
            <SidebarNavItem to='/trade' text='Trade' icon={<TiChartLine />} />
            <SidebarNavItem to='/pay' text='Pay' icon={<RiBankCardFill />} />
            <SidebarNavItem
              to='/deposit'
              text='Deposit'
              icon={<AiFillEuroCircle />}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MenuMobile;
