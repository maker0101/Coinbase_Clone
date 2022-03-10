import { Table, TableRowSelectAsset } from '..';

const TableInputCashout = ({ handleSelectAssetOpenClick, selectedFiat }) => {
	return (
		<Table isInputTable>
			<tbody>
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

export default TableInputCashout;
