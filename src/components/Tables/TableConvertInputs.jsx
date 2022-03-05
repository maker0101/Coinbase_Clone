import './TableConvertInputs.css';
import { SiEthereum } from 'react-icons/si';
import { SiBitcoin } from 'react-icons/si';
import { Table, TableRowSelectAsset } from '..';

const TableConvertInputs = () => {
	return (
		<div className="TableConvertInputs">
			<Table minRowHeight="xl" hasBorder>
				<tbody>
					<TableRowSelectAsset
						helperText="From"
						assetName="Ethereum"
						assetIcon={<SiEthereum />}
					/>
					<TableRowSelectAsset
						helperText="To"
						assetName="Bitcoin"
						assetIcon={<SiBitcoin />}
					/>
				</tbody>
			</Table>
		</div>
	);
};

export default TableConvertInputs;
