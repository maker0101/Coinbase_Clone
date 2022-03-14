import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState('');
  const [activeTab, setActiveTab] = useState(1);

  const handleOpen = (modalName, activeTab = 1) => {
    setActiveModal(modalName);
    setActiveTab(activeTab);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setActiveTab(1);
    setActiveModal('');
  };

  const handleCloseOnBgClick = (e, modalRef) => {
    if (modalRef.current === e.target) handleClose();
  };

  return {
    isOpen,
    activeModal,
    activeTab,
    setActiveTab,
    handleOpen,
    handleClose,
    handleCloseOnBgClick,
  };
};

export default useModal;
