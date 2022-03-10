import { Table, TableRowSelectAsset } from '..';

const TableInputAddCash = ({ handleSelectAssetOpenClick, selectedFiat }) => {
	return (
		<Table isInputTable>
			<tbody>
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

export default TableInputAddCash;
