import { useState } from 'react';
import { Table, TableCellCoinName, Text } from '..';
import { WATCHLIST } from '../../constants/watchlist';

const TableWatchlist = () => {
	const [assets] = useState(WATCHLIST);

	return (
		<Table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Past24h</th>
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

export default TableWatchlist;
