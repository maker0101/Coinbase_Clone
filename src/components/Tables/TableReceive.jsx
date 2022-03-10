import './TableReceive.css';
import { FaAddressCard } from 'react-icons/fa';
import { SiEthereum } from 'react-icons/si';
import {
	Table,
	TableRowQR,
	TableRowSelectAsset,
	TableRowAssetAddress,
} from '..';

const TableReceive = ({ handleSelectAssetOpenClick, selectedCrypto }) => {
	return (
		<div className="TableReceive">
			<Table isInputTable>
				<tbody>
					<TableRowQR />
					<TableRowSelectAsset
						handleSelectAssetOpenClick={handleSelectAssetOpenClick}
						helperText="Asset"
						assetName={selectedCrypto.name}
						assetIcon={selectedCrypto.icon}
						selectAssetType="selectCrypto"
					/>
					<TableRowAssetAddress
						helperText="Address"
						address="123bu1b2423i45b4ib"
						icon={<FaAddressCard />}
					/>
				</tbody>
			</Table>
		</div>
	);
};

export default TableReceive;
