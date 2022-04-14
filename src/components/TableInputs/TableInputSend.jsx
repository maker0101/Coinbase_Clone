import { Table, TableRowInputText, TableRowSelectAsset } from '..';

import { FaWallet } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { useContext } from 'react';

const TableInputSend = () => {
  const { selectedCoin } = useContext(SelectAssetContext);
  return (
    <Table isInputTable>
      <tbody>
        <TableRowSelectAsset
          helperText='Pay with'
          assetName={selectedCoin?.name}
          assetIcon={selectedCoin?.icon}
          selectAssetType='selectCoin'
        />
        <TableRowInputText
          helperText='To'
          name='address'
          inputPlaceholder={'Mobile, email or address'}
          icon={<FaWallet />}
          iconSize={16}
          required={true}
        />
        <TableRowInputText
          helperText='Note'
          name='note'
          inputPlaceholder={'Optional message'}
          icon={<MdEdit />}
          iconSize={21}
        />
      </tbody>
    </Table>
  );
};

export default TableInputSend;
