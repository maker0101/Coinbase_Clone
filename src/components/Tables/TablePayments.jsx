import './TablePayments.css';
import { Text, Table } from '..';

const TablePayments = ({ payments }) => {
	return (
		<Table>
			<tbody>
				{payments.map((p) => (
					<tr key={p.id}>
						<td>
							<div className="tablePayments__cell">
								<div className="tablePayments__icon">{p.icon}</div>
								<div className="tablePayments__head">
									<Text>{`Sent ${p.name} to ${p.adress}`}</Text>
								</div>
								<div className="tablePayments__body">
									<Text color="grey" size="s">
										{`${p.amount} ${p.symbol} on ${p.date}`}
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

export default TablePayments;
