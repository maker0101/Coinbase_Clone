import { useState, useRef } from 'react';

// TODO: useModal hook currently not used -> tried to integrate it but ran into problems
const useModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const modalRef = useRef();

	const toggleModal = (e) => {
		if (modalRef.current === e.target) {
			setIsModalOpen(() => !isModalOpen);
		}
	};

	return { isModalOpen, toggleModal, modalRef };
};

export default useModal;
