import './ModalClose.css';

import { FaArrowLeft } from 'react-icons/fa';
import { ModalContext } from '../../contexts/ModalContext';
import { useContext } from 'react';

const ModalClose = () => {
  const { handleClose } = useContext(ModalContext);

  return (
    <div className='ModalClose' onClick={handleClose}>
      <FaArrowLeft />
    </div>
  );
};

export default ModalClose;
