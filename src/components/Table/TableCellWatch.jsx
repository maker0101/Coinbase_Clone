import './TableCellWatch.css';

import { Button, Star } from '..';

import { ModalContext } from '../../contexts/ModalContext';
import { useContext } from 'react';

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
