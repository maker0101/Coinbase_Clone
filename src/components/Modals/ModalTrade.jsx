import { TabTrade, Modal, ModalClose } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

const ModalTrade = ({ isOpen, onClose }) => {
	let isWidthMax800 = useMediaQuery('(max-width: 800px)');

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<TabTrade />
			{isWidthMax800 && <ModalClose onClose={onClose} />}
		</Modal>
	);
};

export default ModalTrade;
