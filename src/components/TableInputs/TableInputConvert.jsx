import { SiEthereum } from 'react-icons/si';
import { SiBitcoin } from 'react-icons/si';
import { Table, TableRowSelectAsset } from '..';

const TableInputConvert = () => {
	return (
		<Table isInputTable>
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
	);
};

export default TableInputConvert;
