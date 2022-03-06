import { SiEthereum } from 'react-icons/si';
import { AiOutlineEuro } from 'react-icons/ai';
import { Table, TableRowSelectAsset } from '..';

const TableInputSell = () => {
	return (
		<Table isInputTable>
			<tbody>
				<TableRowSelectAsset
					helperText="Sell"
					assetName="Ethereum"
					assetIcon={<SiEthereum />}
				/>
				<TableRowSelectAsset
					helperText="Add to"
					assetName="EUR wallet"
					assetIcon={<AiOutlineEuro />}
				/>
			</tbody>
		</Table>
	);
};

export default TableInputSell;
