import { Modal, ModalClose, TabDeposit } from '..';

import useMediaQuery from '../../hooks/useMediaQuery';

const ModalDeposit = () => {
  const isWidthMax800 = useMediaQuery('(max-width: 800px)');

  return (
    <Modal>
      <TabDeposit />
      {isWidthMax800 && <ModalClose />}
    </Modal>
  );
};

export default ModalDeposit;
