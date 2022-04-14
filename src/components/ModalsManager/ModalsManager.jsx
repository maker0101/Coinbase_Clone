import {
  MenuMobile,
  ModalDeposit,
  ModalPay,
  ModalProfile,
  ModalTrade,
} from '..';

import { ModalContext } from '../../contexts/ModalContext';
import { useContext } from 'react';

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
