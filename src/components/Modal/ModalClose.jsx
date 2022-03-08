import './ModalClose.css';
import { FaArrowLeft } from 'react-icons/fa';

const ModalClose = ({ setIsModalOpen }) => {
	const closeModal = () => setIsModalOpen(false);

	return (
		<div className="ModalClose" onClick={closeModal}>
			<FaArrowLeft />
		</div>
	);
};

export default ModalClose;
