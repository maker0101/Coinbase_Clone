import './Modal.css';

import { useContext, useRef } from 'react';

import { ModalContext } from '../../contexts/ModalContext';

const Modal = ({ children }) => {
  const { isOpen, handleCloseOnBgClick } = useContext(ModalContext);
  const modalRef = useRef();

  return (
    <>
      {isOpen && (
        <div
          className='Modal'
          onClick={(e) => handleCloseOnBgClick(e, modalRef)}
          ref={modalRef}>
          <div className='modal__content'>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
