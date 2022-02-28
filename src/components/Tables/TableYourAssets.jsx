import { useState } from 'react';
import { Table, TableCellCoinName, Text } from '..';
import { YOUR_ASSETS } from '../../constants/your-assets';

const TableYourAssets = () => {
	const [yourAssets] = useState(YOUR_ASSETS);

	return (
		<Table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Ballance</th>
					<th>Price</th>
					<th>Allocation</th>
				</tr>
			</thead>
			<tbody>
				{yourAssets.map((asset) => (
					<tr key={asset.symbol}>
						<td>
							<TableCellCoinName
								icon={asset.icon}
								name={asset.name}
								symbol={asset.symbol}
							/>
						</td>
						<td>
							<Text>{`€${asset.balance_eur.toLocaleString()}`}</Text>
							<Text color="grey" size="s">
								{`${asset.balance_coin} ${asset.symbol}`}
							</Text>
						</td>
						<td>
							<Text>{`€${asset.price_eur.toLocaleString()}`}</Text>
							<Text
								size="s"
								color={asset.price_change24h < 0 ? 'red' : 'green'}>
								{asset.price_change24h}%
							</Text>
						</td>
						<td>
							<Text>{asset.allocation}%</Text>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default TableYourAssets;
