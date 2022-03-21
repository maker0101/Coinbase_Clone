import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { Table, TableRowSelectAsset } from '..';

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
