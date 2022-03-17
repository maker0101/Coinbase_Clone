import { createContext } from 'react';
import useModal from '../hooks/useModal';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const {
    isOpen,
    activeModal,
    activeTab,
    setActiveTab,
    handleOpen,
    handleClose,
    handleCloseOnBgClick,
  } = useModal();

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        activeModal,
        activeTab,
        setActiveTab,
        handleOpen,
        handleClose,
        handleCloseOnBgClick,
      }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
