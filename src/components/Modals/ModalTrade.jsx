import { TabTrade, Modal, ModalClose } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

const ModalTrade = () => {
  let isWidthMax800 = useMediaQuery('(max-width: 800px)');

  return (
    <Modal>
      <TabTrade />
      {isWidthMax800 && <ModalClose />}
    </Modal>
  );
};

export default ModalTrade;
