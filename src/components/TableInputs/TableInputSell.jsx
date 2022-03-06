import { SiEthereum } from 'react-icons/si';
import { AiOutlineEuro } from 'react-icons/ai';
import { Table, TableRowSelectAsset } from '..';

const TableInputSell = () => {
	return (
			<Table minRowHeight="xl" hasBorder marginBottom={24}>
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
