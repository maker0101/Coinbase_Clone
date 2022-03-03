import './Modal.css';
import { useRef } from 'react';

const Modal = ({ children, isModalOpen, setIsModalOpen }) => {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setIsModalOpen(false);
		}
  };

	return (
		<>
			{isModalOpen && (
				<div className="Modal" onClick={closeModal} ref={modalRef}>
					<div className="modal__content">{children}</div>
				</div>
			)}
		</>
	);
};

export default Modal;
