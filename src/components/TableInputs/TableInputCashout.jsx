import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { Table, TableRowSelectAsset } from '..';

const TableInputCashout = () => {
  const { handleSelectAssetOpenClick, selectedFiat } =
    useContext(SelectAssetContext);

  return (
    <Table isInputTable>
      <tbody>
        <TableRowSelectAsset
          handleSelectAssetOpenClick={handleSelectAssetOpenClick}
          helperText='With'
          assetName={`${selectedFiat.symbol} wallet`}
          assetIcon={selectedFiat.icon}
          selectAssetType='selectFiat'
        />
      </tbody>
    </Table>
  );
};

export default TableInputCashout;
