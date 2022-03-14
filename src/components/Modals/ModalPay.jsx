import { Modal, ModalClose, TabPay } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

const ModalPay = ({ isOpen, onClose }) => {
	const isWidthMax800 = useMediaQuery('(max-width: 800px)');

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<TabPay />
			{isWidthMax800 && <ModalClose onClose={onClose} />}
		</Modal>
	);
};

export default ModalPay;
