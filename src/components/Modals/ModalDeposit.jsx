import { Modal, TabDeposit, ModalClose } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

const ModalDeposit = ({ isModalOpen, setIsModalOpen }) => {
	let isWidthMax800 = useMediaQuery('(max-width: 800px)');

	return (
		<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
			<TabDeposit />
			{isWidthMax800 && <ModalClose setIsModalOpen={setIsModalOpen} />}
		</Modal>
	);
};

export default ModalDeposit;
