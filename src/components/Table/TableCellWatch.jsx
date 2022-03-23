import './TableCellWatch.css';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Button, Star } from '..';

const TableCellWatch = ({ coin }) => {
  const { handleOpen } = useContext(ModalContext);

  return (
    <div className='TableCellWatch'>
      <Button onClick={() => handleOpen('trade')}>Buy</Button>
      <Star coin={coin} />
    </div>
  );
};

export default TableCellWatch;
