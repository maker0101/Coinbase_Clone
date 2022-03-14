import { Modal, ModalClose, TabPay } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

const ModalPay = () => {
  let isWidthMax800 = useMediaQuery('(max-width: 800px)');

  return (
    <Modal >
      <TabPay />
      {isWidthMax800 && <ModalClose />}
    </Modal>
  );
};

export default ModalPay;
