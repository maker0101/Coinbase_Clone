import './TableCellWatch.css';
import { useState } from 'react';
import { Button, Star, ModalTrade } from '..';

const TableCellWatch = () => {
	const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);
	const openTradeModal = () => setIsTradeModalOpen(true);

	return (
		<div className="TableCellWatch">
			<Button onClick={openTradeModal}>Buy</Button>
			<Star />
			<ModalTrade
				isModalOpen={isTradeModalOpen}
				setIsModalOpen={setIsTradeModalOpen}
			/>
		</div>
	);
};

export default TableCellWatch;
