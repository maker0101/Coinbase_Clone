import { SiEthereum } from 'react-icons/si';
import { AiOutlineEuro } from 'react-icons/ai';
import { Table, TableRowSelectAsset } from '..';

const TableInputBuy = () => {
	return (
		<Table minRowHeight="xl" hasBorder marginBottom={24}>
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
	);
};

export default TableInputBuy;
