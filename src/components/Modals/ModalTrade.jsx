import { TabTrade, Modal, ModalClose } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

const ModalTrade = ({ isModalOpen, setIsModalOpen }) => {
  let isWidthMax800 = useMediaQuery('(max-width: 800px)');

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <TabTrade />
      {isWidthMax800 && <ModalClose setIsModalOpen={setIsModalOpen} />}
    </Modal>
  );
};

export default ModalTrade;
