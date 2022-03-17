import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { Table, TableRowSelectAsset } from '..';

const TableInputBuy = () => {
  const { selectedCrypto, selectedFiat } = useContext(SelectAssetContext);
  return (
    <Table isInputTable>
      <tbody>
        <TableRowSelectAsset
          helperText='Buy'
          assetName={selectedCrypto.name}
          assetIcon={selectedCrypto.icon}
          selectAssetType='selectCrypto'
        />
        <TableRowSelectAsset
          helperText='With'
          assetName={`${selectedFiat.symbol} wallet`}
          assetIcon={selectedFiat.icon}
          selectAssetType='selectFiat'
        />
      </tbody>
    </Table>
  );
};

export default TableInputBuy;
