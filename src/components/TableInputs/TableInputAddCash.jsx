import { AiOutlineEuro } from 'react-icons/ai';
import { Table, TableRowSelectAsset } from '..';

const TableInputAddCash = () => {
	return (
		<Table minRowHeight="xl" hasBorder marginBottom={24}>
			<tbody>
				<TableRowSelectAsset
					helperText="Add to"
					assetName="EUR wallet"
					assetIcon={<AiOutlineEuro />}
				/>
			</tbody>
		</Table>
	);
};

export default TableInputAddCash;
