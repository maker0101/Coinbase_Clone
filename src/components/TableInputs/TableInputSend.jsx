import { MdEdit } from 'react-icons/md';
import { FaWallet } from 'react-icons/fa';
import { Table, TableRowSelectAsset, TableRowInputText } from '..';

const TableInputSend = ({ handleSelectAssetOpenClick, selectedCrypto }) => {
	return (
		<Table isInputTable>
			<tbody>
				<TableRowSelectAsset
					handleSelectAssetOpenClick={handleSelectAssetOpenClick}
					helperText="Pay with"
					assetName={selectedCrypto.name}
					assetIcon={selectedCrypto.icon}
					selectAssetType="selectCrypto"
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
	);
};

export default TableInputSend;
