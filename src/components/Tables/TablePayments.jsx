import './TablePayments.css';
import { Text, Table } from '..';

const TablePayments = ({ payments }) => {
  return (
    <Table>
      <tbody>
        {payments.map((p) => (
          <tr key={p.id}>
            <td>
              <div className='tablePayments__cell'>
                <img className='tablePayments__icon' src={p.icon} />
                <div className='tablePayments__head'>
                  <Text>{`Sent ${p.name}`}</Text>
                </div>
                <div className='tablePayments__body'>
                  <Text color='grey' size='s'>
                    {`To ${p.adress} on ${p.date}`}
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
