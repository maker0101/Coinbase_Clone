import './TableReceive.css';
import { FaAddressCard } from 'react-icons/fa';
import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import {
  Table,
  TableRowQR,
  TableRowSelectAsset,
  TableRowAssetAddress,
} from '..';

const TableReceive = () => {
  const { handleSelectAssetOpenClick, selectedCoin } =
    useContext(SelectAssetContext);
  return (
    <div className='TableReceive'>
      <Table isInputTable>
        <tbody>
          <TableRowQR />
          <TableRowSelectAsset
            handleSelectAssetOpenClick={handleSelectAssetOpenClick}
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
