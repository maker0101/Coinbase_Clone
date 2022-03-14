import { useState, useRef } from 'react';

// TODO: useModal hook currently not used -> tried to integrate it but ran into problems
const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const modalRef = useRef();

	const toggleModal = (e) => {
		if (modalRef.current === e.target) {
			setIsOpen(() => !isOpen);
		}
	};

	return { isOpen, toggleModal, modalRef };
};

export default useModal;
