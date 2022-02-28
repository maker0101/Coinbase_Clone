import { Table, TableCellCoinName, TableCellWatch, Text } from '..';

const TableAssets = ({ assets }) => {
	return (
		<Table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Past 24h</th>
					<th>Price</th>
					<th>Change</th>
					<th>Market cap</th>
					<th>Watch</th>
				</tr>
			</thead>
			<tbody>
				{assets.map((asset) => (
					<tr key={asset.symbol}>
						<td>
							<TableCellCoinName
								icon={asset.icon}
								name={asset.name}
								symbol={asset.symbol}
							/>
						</td>
						<td>
							<Text>Change</Text>
							<Text>Chart</Text>
						</td>
						<td>
							<Text>{`€${asset.price_eur.toLocaleString()}`}</Text>
						</td>
						<td>
							<Text color={asset.price_change24h < 0 ? 'red' : 'green'}>
								{asset.price_change24h}%
							</Text>
						</td>
						<td>
							<Text>{`€${asset.market_cap}B`}</Text>
						</td>
						<td>
							<TableCellWatch />
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default TableAssets;
