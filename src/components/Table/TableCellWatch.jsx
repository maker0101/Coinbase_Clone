import './TableCellWatch.css';
import { useState } from 'react';
import { Button, Star, ModalTrade } from '..';

const TableCellWatch = ({ onWatchlist }) => {
	const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);
	const openTradeModal = () => setIsTradeModalOpen(true);

	return (
		<div className="TableCellWatch">
			<Button onClick={openTradeModal}>Buy</Button>
			<Star onWatchlist={onWatchlist} />
			<ModalTrade
				isOpen={isTradeModalOpen}
				onClose={setIsTradeModalOpen}
			/>
		</div>
	);
};

export default TableCellWatch;
