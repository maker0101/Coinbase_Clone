import './TableRowInputText.css';

import { Input, Text } from '..';

const TableRowInputText = ({
  helperText,
  name,
  inputPlaceholder,
  icon,
  iconSize,
  required,
}) => {
  return (
    <tr className='TableRowInputText'>
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
          <Input
            placeholder={inputPlaceholder}
            name={name}
            required={required}
          />
        </div>
      </td>
      <td></td>
    </tr>
  );
};

export default TableRowInputText;
