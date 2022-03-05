import { TabTrade, Modal } from '..';

const ModalTrade = ({ isModalOpen, setIsModalOpen }) => {
	return (
		<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
			<TabTrade />
		</Modal>
	);
};

export default ModalTrade;
