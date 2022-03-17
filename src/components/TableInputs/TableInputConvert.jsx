import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { Table, TableRowSelectAsset } from '..';

const TableInputConvert = () => {
  const { selectedCrypto, selectedCryptoConvertTo } =
    useContext(SelectAssetContext);
  return (
    <Table isInputTable>
      <tbody>
        <TableRowSelectAsset
          helperText='From'
          assetName={selectedCrypto.name}
          assetIcon={selectedCrypto.icon}
          selectAssetType='selectCrypto'
        />
        <TableRowSelectAsset
          helperText='To'
          assetName={selectedCryptoConvertTo.name}
          assetIcon={selectedCryptoConvertTo.icon}
          selectAssetType='selectCrypToConvertTo'
        />
      </tbody>
    </Table>
  );
};

export default TableInputConvert;
