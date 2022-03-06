import './TableReceive.css';
import { FaAddressCard } from 'react-icons/fa';
import { SiEthereum } from 'react-icons/si';
import {
	Table,
	TableRowQR,
	TableRowSelectAsset,
	TableRowAssetAddress,
} from '..';

const TableReceive = () => {
	return (
		<div className="TableReceive">
			<Table isInputTable>
				<tbody>
					<TableRowQR />
					<TableRowSelectAsset
						helperText="Asset"
						assetName="Ethereum"
						assetIcon={<SiEthereum />}
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
