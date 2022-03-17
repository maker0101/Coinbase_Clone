import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { Table, TableRowSelectAsset } from '..';

const TableInputSell = () => {
  const { handleSelectAssetOpenClick, selectedCoin, selectedFiat } =
    useContext(SelectAssetContext);
  return (
    <Table isInputTable>
      <tbody>
        <TableRowSelectAsset
          handleSelectAssetOpenClick={handleSelectAssetOpenClick}
          helperText='Sell'
          assetName={selectedCoin?.name}
          assetIcon={selectedCoin?.icon}
          selectAssetType='selectCoin'
        />
        <TableRowSelectAsset
          handleSelectAssetOpenClick={handleSelectAssetOpenClick}
          helperText='Add to'
          assetName={`${selectedFiat?.symbol} wallet`}
          assetIcon={selectedFiat?.icon}
          selectAssetType='selectFiat'
        />
      </tbody>
    </Table>
  );
};

export default TableInputSell;
