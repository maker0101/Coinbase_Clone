import { Modal, ModalClose, TabPay } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

const ModalPay = ({ isModalOpen, setIsModalOpen }) => {
  let isWidthMax800 = useMediaQuery('(max-width: 800px)');

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <TabPay />
      {isWidthMax800 && <ModalClose setIsModalOpen={setIsModalOpen} />}
    </Modal>
  );
};

export default ModalPay;
