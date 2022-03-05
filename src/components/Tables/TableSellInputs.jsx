import './TableSellInputs.css';
import { SiEthereum } from 'react-icons/si';
import { AiOutlineEuro } from 'react-icons/ai';
import { Table, TableRowSelectAsset } from '..';

const TableSellInputs = () => {
	return (
		<div className="TableSellInputs">
			<Table minRowHeight="xl" hasBorder>
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
		</div>
	);
};

export default TableSellInputs;
