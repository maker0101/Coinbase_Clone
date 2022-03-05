import './TableBuyInputs.css';
import { SiEthereum } from 'react-icons/si';
import { AiOutlineEuro } from 'react-icons/ai';
import { Table, TableRowSelectAsset } from '..';

const TableBuyInputs = () => {
	return (
		<div className="TableBuyInputs">
			<Table minRowHeight="xl" hasBorder>
				<tbody>
					<TableRowSelectAsset
						helperText="Buy"
						assetName="Ethereum"
						assetIcon={<SiEthereum />}
					/>
					<TableRowSelectAsset
						helperText="With"
						assetName="EUR wallet"
						assetIcon={<AiOutlineEuro />}
					/>
				</tbody>
			</Table>
		</div>
	);
};

export default TableBuyInputs;
