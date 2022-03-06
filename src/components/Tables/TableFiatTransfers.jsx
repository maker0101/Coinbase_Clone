import './TablePayments.css';
import { Text, Table } from '..';

const TableFiatTransfers = ({ payments }) => {
	return (
		<Table>
			<tbody>
				{payments.map((p) => (
					<tr key={p.id}>
						<td>
							<div className="tablePayments__cell">
								<div className="tablePayments__icon">{p.icon}</div>
								<div className="tablePayments__head">
									<Text>{`${p.type === 'deposit' ? 'Deposited' : 'Withdrew'} ${
										p.amount
									} ${p.name}`}</Text>
								</div>
								<div className="tablePayments__body">
									<Text color="grey" size="s">
										{`On ${p.date}`}
									</Text>
								</div>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default TableFiatTransfers;
