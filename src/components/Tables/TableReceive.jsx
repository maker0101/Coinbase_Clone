import './TableReceive.css';

import {
  Table,
  TableRowAssetAddress,
  TableRowQR,
  TableRowSelectAsset,
} from '..';

import { FaAddressCard } from 'react-icons/fa';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { useContext } from 'react';

const TableReceive = () => {
  const { selectedCoin } = useContext(SelectAssetContext);
  return (
    <div className='TableReceive'>
      <Table isInputTable>
        <tbody>
          <TableRowQR />
          <TableRowSelectAsset
            helperText='Asset'
            assetName={selectedCoin?.name}
            assetIcon={selectedCoin?.icon}
            selectAssetType='selectCoin'
          />
          <TableRowAssetAddress
            helperText='Address'
            address='123bu1b2423i45b4ib'
            icon={<FaAddressCard />}
          />
        </tbody>
      </Table>
    </div>
  );
};

export default TableReceive;
