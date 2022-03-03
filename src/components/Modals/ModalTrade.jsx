import { Tab, Modal } from '..';
import { TABS_TRADE } from '../../constants/tabs-trade';

const ModalTrade = ({ isModalOpen, setIsModalOpen }) => {
	return (
		<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
			<Tab data={TABS_TRADE} />
		</Modal>
	);
};

export default ModalTrade;
