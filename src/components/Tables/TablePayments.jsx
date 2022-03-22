import './TablePayments.css';
import { Text, Table } from '..';
import useTransactions from '../../hooks/useTransactions';
import { timestampToMonthDayYear } from '../../utilities/transform-dates';

const TablePayments = () => {
  const { sendTransactions } = useTransactions();

  return (
    <Table>
      <tbody>
        {sendTransactions.map((t) => (
          <tr key={t?.id}>
            <td>
              <div className='tablePayments__cell'>
                <img className='tablePayments__icon' src={t?.icon} />
                <div className='tablePayments__head'>
                  <Text>{`Sent ${t?.amount_coin_out.toFixed(4)} ${
                    t?.out_symbol
                  }`}</Text>
                </div>
                <div className='tablePayments__body'>
                  <Text color='grey' size='s'>
                    {`To ${t?.address} on ${timestampToMonthDayYear(
                      t?.timestamp
                    )}`}
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
