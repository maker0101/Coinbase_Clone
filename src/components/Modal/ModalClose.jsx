import './ModalClose.css';
import { FaArrowLeft } from 'react-icons/fa';

const ModalClose = ({ onClose }) => {
	const closeModal = () => onClose(false);

	return (
		<div className="ModalClose" onClick={closeModal}>
			<FaArrowLeft />
		</div>
	);
};

export default ModalClose;
