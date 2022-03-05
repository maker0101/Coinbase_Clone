import { Modal, TabPay } from '..';

const ModalPay = ({ isModalOpen, setIsModalOpen }) => {
	return (
		<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
			<TabPay />
		</Modal>
	);
};

export default ModalPay;
