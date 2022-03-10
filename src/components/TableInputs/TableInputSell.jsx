import { Table, TableRowSelectAsset } from '..';

const TableInputSell = ({
	handleSelectAssetOpenClick,
	selectedCrypto,
	selectedFiat,
}) => {
	return (
		<Table isInputTable>
			<tbody>
				<TableRowSelectAsset
					handleSelectAssetOpenClick={handleSelectAssetOpenClick}
					helperText="Sell"
					assetName={selectedCrypto.name}
					assetIcon={selectedCrypto.icon}
					selectAssetType="selectCrypto"
				/>
				<TableRowSelectAsset
					handleSelectAssetOpenClick={handleSelectAssetOpenClick}
					helperText="Add to"
					assetName={`${selectedFiat.symbol} wallet`}
					assetIcon={selectedFiat.icon}
					selectAssetType="selectFiat"
				/>
			</tbody>
		</Table>
	);
};

export default TableInputSell;
