import { Table, TableRowSelectAsset } from '..';

const TableInputBuy = ({
	handleSelectAssetOpenClick,
	selectedCrypto,
	selectedFiat,
}) => {
	return (
		<Table isInputTable>
			<tbody>
				<TableRowSelectAsset
					handleSelectAssetOpenClick={handleSelectAssetOpenClick}
					helperText="Buy"
					assetName={selectedCrypto.name}
					assetIcon={selectedCrypto.icon}
					selectAssetType="selectCrypto"
				/>
				<TableRowSelectAsset
					handleSelectAssetOpenClick={handleSelectAssetOpenClick}
					helperText="With"
					assetName={`${selectedFiat.symbol} wallet`}
					assetIcon={selectedFiat.icon}
					selectAssetType="selectFiat"
				/>
			</tbody>
		</Table>
	);
};

export default TableInputBuy;
