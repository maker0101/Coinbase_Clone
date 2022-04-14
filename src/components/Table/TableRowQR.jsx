import './TableRowQR.css';

import { MdQrCode2 } from 'react-icons/md';

const TableRowQR = () => {
  return (
    <tr className='TableRowQR'>
      <td colSpan='3'>
        <div className='tableRowQR__iconWrapper'>
          <MdQrCode2 />
        </div>
      </td>
    </tr>
  );
};

export default TableRowQR;
