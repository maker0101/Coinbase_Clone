import { AiOutlineEuro } from 'react-icons/ai';
import { Table, TableRowSelectAsset } from '..';

const TableInputCashout = () => {
	return (
		<Table isInputTable>
			<tbody>
				<TableRowSelectAsset
					helperText="Witdraw from"
					assetName="EUR wallet"
					assetIcon={<AiOutlineEuro />}
				/>
			</tbody>
		</Table>
	);
};

export default TableInputCashout;
