import { Table, TableRowSelectAsset } from '..';

import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { useContext } from 'react';

const TableInputAddCash = () => {
  const { selectedFiat } = useContext(SelectAssetContext);

  return (
    <Table isInputTable>
      <tbody>
        <TableRowSelectAsset
          helperText='Add to'
          assetName={`${selectedFiat?.symbol} wallet`}
          assetIcon={selectedFiat?.icon}
          selectAssetType='selectFiat'
        />
      </tbody>
    </Table>
  );
};

export default TableInputAddCash;
