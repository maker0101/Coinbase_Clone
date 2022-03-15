import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { Table, TableRowSelectAsset } from '..';

const TableInputSell = () => {
  const { selectedCrypto, selectedFiat } = useContext(SelectAssetContext);
  return (
    <Table isInputTable>
      <tbody>
        <TableRowSelectAsset
          helperText='Sell'
          assetName={selectedCrypto.name}
          assetIcon={selectedCrypto.icon}
          selectAssetType='selectCrypto'
        />
        <TableRowSelectAsset
          helperText='Add to'
          assetName={`${selectedFiat.symbol} wallet`}
          assetIcon={selectedFiat.icon}
          selectAssetType='selectFiat'
        />
      </tbody>
    </Table>
  );
};

export default TableInputSell;
