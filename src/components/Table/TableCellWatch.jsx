import './TableCellWatch.css';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Button, Star } from '..';

const TableCellWatch = ({ onWatchlist }) => {
  const { handleOpen } = useContext(ModalContext);

  return (
    <div className='TableCellWatch'>
      <Button onClick={() => handleOpen('trade')}>Buy</Button>
      <Star onWatchlist={onWatchlist} />
    </div>
  );
};

export default TableCellWatch;
