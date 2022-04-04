import {
  ModalTrade,
  ModalPay,
  ModalDeposit,
  ModalProfile,
  MenuMobile,
} from '..';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

const ModalsManager = () => {
  const { activeModal } = useContext(ModalContext);

  switch (activeModal) {
    case 'trade':
      return <ModalTrade />;
    case 'pay':
      return <ModalPay />;
    case 'deposit':
      return <ModalDeposit />;
    case 'profile':
      return <ModalProfile />;
    case 'menuMobile':
      return <MenuMobile />;
    default:
      return null;
  }
};

export default ModalsManager;
