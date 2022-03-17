import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { Table, TableRowSelectAsset } from '..';

const TableInputConvert = () => {
  const { selectedCoin, selectedCoinConvertTo } =
    useContext(SelectAssetContext);
  return (
    <Table isInputTable>
      <tbody>
        <TableRowSelectAsset
          helperText='From'
          assetName={selectedCoin?.name}
          assetIcon={selectedCoin?.icon}
          selectAssetType='selectCoin'
        />
        <TableRowSelectAsset
          helperText='To'
          assetName={selectedCoinConvertTo?.name}
          assetIcon={selectedCoinConvertTo?.icon}
          selectAssetType='selectCoinConvertTo'
        />
      </tbody>
    </Table>
  );
};

export default TableInputConvert;
