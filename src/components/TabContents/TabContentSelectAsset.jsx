import './TabContentSelectAsset.css';
import { Text, Search, TabContent, Table, TableCellCoinName } from '..';
import { FaArrowLeft } from 'react-icons/fa';
import { YOUR_ASSETS } from '../../constants/your-assets';

const TabContentSelectAsset = () => {
	return (
		<TabContent>
			<div className="tabContent__titleGrid">
				<FaArrowLeft />
				<Text h3>Select Asset</Text>
			</div>
			<Search maxWidth={800} />
			<Table hasSmallPadding>
				<tbody>
					{YOUR_ASSETS.map((asset) => (
						<tr key={asset.symbol}>
							<td>
								<TableCellCoinName
									icon={asset.icon}
									name={asset.name}
									symbol={asset.symbol}
								/>
							</td>
							<td>
								<Text>{`€${asset.price_eur.toLocaleString()}`}</Text>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</TabContent>
	);
};

export default TabContentSelectAsset;
