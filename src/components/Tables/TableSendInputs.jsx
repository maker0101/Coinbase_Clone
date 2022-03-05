import './TableSendInputs.css';
import { MdEdit } from 'react-icons/md';
import { SiEthereum } from 'react-icons/si';
import { FaWallet } from 'react-icons/fa';
import { Table, TableRowSelectAsset, TableRowInputText } from '..';

const TableSendInputs = () => {
	return (
		<div className="TableSendInputs">
			<Table minRowHeight="xl" hasBorder>
				<tbody>
					<TableRowSelectAsset
						helperText="Pay with"
						assetName="Ethereum"
						assetIcon={<SiEthereum />}
					/>
					<TableRowInputText
						helperText="To"
						inputPlaceholder={'Mobile, email or address'}
						icon={<FaWallet />}
						iconSize={16}
					/>
					<TableRowInputText
						helperText="Note"
						inputPlaceholder={'Optional message'}
						icon={<MdEdit />}
						iconSize={21}
					/>
				</tbody>
			</Table>
		</div>
	);
};

export default TableSendInputs;
