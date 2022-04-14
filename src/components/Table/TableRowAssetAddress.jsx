import { MdOutlineContentCopy } from 'react-icons/md';
import { Text } from '..';

const TableRowAssetAddress = ({ helperText, address, icon, iconSize = 16 }) => {
  return (
    <tr>
      <td>
        <Text color='grey'>{helperText}</Text>
      </td>
      <td>
        <div className='tableRowInputText__cellVerticalAligned'>
          <div
            className='tableRowInputText__icon'
            style={{ fontSize: iconSize + 'px' }}>
            {icon}
          </div>
          <Text>{address}</Text>
        </div>
      </td>
      <td>
        <MdOutlineContentCopy />
      </td>
    </tr>
  );
};

export default TableRowAssetAddress;
