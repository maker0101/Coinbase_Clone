import './SidebarNavItem.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import usePath from '../../hooks/usePath';
import classNames from 'classnames';
import { Tooltip } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

const SidebarNavItem = ({ to, icon, text }) => {
  const { activeModal, handleClose } = useContext(ModalContext);
  let isWidthMax1300 = useMediaQuery('(max-width: 1300px)');
  const { page } = usePath();
  const inMobileMenu = activeModal === 'menuMobile';

  const sidebarNavItemClasses = classNames({
    SidebarNavItem: true,
    hasTooltip: !inMobileMenu && isWidthMax1300,
    'sidebarNavItem-active': page === text,
  });

  return (
    <Link to={to} className={sidebarNavItemClasses} onClick={handleClose}>
      <div className='sidebarNavItem__circle'>
        <div className='sidebarNavItem__icon'>{icon}</div>
      </div>
      <div className='sidebarNavItem__text'>{text}</div>
      {!inMobileMenu && isWidthMax1300 && <Tooltip>{text}</Tooltip>}
    </Link>
  );
};

export default SidebarNavItem;
