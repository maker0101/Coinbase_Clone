import './ModalClose.css';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { FaArrowLeft } from 'react-icons/fa';

const ModalClose = () => {
  const { handleClose } = useContext(ModalContext);

  return (
    <div className='ModalClose' onClick={handleClose}>
      <FaArrowLeft />
    </div>
  );
};

export default ModalClose;
