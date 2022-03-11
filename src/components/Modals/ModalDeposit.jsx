import { Modal, TabDeposit, ModalClose } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

const ModalDeposit = ({ isOpen, onClose }) => {
	let isWidthMax800 = useMediaQuery('(max-width: 800px)');

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<TabDeposit />
			{isWidthMax800 && <ModalClose onClose={onClose} />}
		</Modal>
	);
};

export default ModalDeposit;
