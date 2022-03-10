import { AiOutlineEuro } from 'react-icons/ai';
import { Table, TableRowSelectAsset } from '..';

const TableInputBuy = ({ toggleIsSelectAssetOpen, selectedAsset }) => {
	return (
		<Table isInputTable>
			<tbody>
				<TableRowSelectAsset
					toggleIsSelectAssetOpen={toggleIsSelectAssetOpen}
					helperText="Buy"
					assetName={selectedAsset.name}
					assetIcon={selectedAsset.icon}
				/>
				<TableRowSelectAsset
					helperText="With"
					assetName="EUR wallet"
					assetIcon={<AiOutlineEuro />}
				/>
			</tbody>
		</Table>
	);
};

export default TableInputBuy;
