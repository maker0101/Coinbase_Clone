import { Table, TableRowSelectAsset } from '..';

const TableInputConvert = ({
	handleSelectAssetOpenClick,
	selectedCrypto,
	selectedCryptoConvertTo,
}) => {
	return (
		<Table isInputTable>
			<tbody>
				<TableRowSelectAsset
					handleSelectAssetOpenClick={handleSelectAssetOpenClick}
					helperText="From"
					assetName={selectedCrypto.name}
					assetIcon={selectedCrypto.icon}
					selectAssetType="selectCrypto"
				/>
				<TableRowSelectAsset
					handleSelectAssetOpenClick={handleSelectAssetOpenClick}
					helperText="To"
					assetName={selectedCryptoConvertTo.name}
					assetIcon={selectedCryptoConvertTo.icon}
					selectAssetType="selectCryptoConvertTo"
				/>
			</tbody>
		</Table>
	);
};

export default TableInputConvert;
