import './Table.css';
import { RiPieChartFill } from 'react-icons/ri';
import TableCellCoinName from './TableCellCoinName';
import { Text } from '..';

const Table = ({ children }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Ballance</th>
					<th>Price</th>
					<th>Allocation</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<TableCellCoinName
							icon={<RiPieChartFill />}
							name="Ethereum"
							symbol="ETH"
						/>
					</td>
					<td>
						<Text>€1,986.74</Text>
						<Text>0.84433661 ETH</Text>
					</td>
					<td>
						<Text>2,325.89</Text>
						<Text>-3,90%</Text>
					</td>
					<td>
						<Text>39,66%</Text>
					</td>
				</tr>
				<tr>
					<td>
						<Text>Ethereum</Text>
						<Text>ETH</Text>
					</td>
					<td>
						<Text>€1,986.74</Text>
						<Text>0.84433661 ETH</Text>
					</td>
					<td>
						<Text>2,325.89</Text>
						<Text>-3,90%</Text>
					</td>
					<td>
						<Text>39,66%</Text>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Table;
