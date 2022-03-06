import { AiOutlineEuro } from 'react-icons/ai';
import { Table, TableRowSelectAsset } from '..';

const TableInputCashout = () => {
	return (
		<Table minRowHeight="xl" hasBorder marginBottom={24}>
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
