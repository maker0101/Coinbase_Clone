import './TableCellCoinName.css';

import { Text } from '..';

const TableCellCoinName = ({ icon, name, symbol }) => {
  return (
    <div className='TableCellCoinName'>
      <img
        className='tableCellCoinName__icon'
        src={icon}
        alt={`${name} icon`}
      />
      <div className='tableCellCoinName__name'>
        <Text>{name}</Text>
      </div>
      <div className='tableCellCoinName__symbol'>
        <Text color='grey' size='s' uppercase>
          {symbol}
        </Text>
      </div>
    </div>
  );
};

export default TableCellCoinName;
