import './Modal.css';
import { useRef } from 'react';

const Modal = ({ children, isOpen, onClose }) => {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			onClose(false);
		}
  };

	return (
		<>
			{isOpen && (
				<div className="Modal" onClick={closeModal} ref={modalRef}>
					<div className="modal__content">{children}</div>
				</div>
			)}
		</>
	);
};

export default Modal;
