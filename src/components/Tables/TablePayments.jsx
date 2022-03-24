import './TablePayments.css';
import { Text, Table } from '..';
import useTransactions from '../../hooks/useTransactions';
import { timestampToMonthDayYear } from '../../utilities/transform-dates';

const TablePayments = () => {
  const { sendTransactions } = useTransactions();

  return (
    <Table>
      <tbody>
        {sendTransactions.slice(0, 5).map((t) => (
          <tr key={t?.id}>
            <td>
              <div className='tablePayments__cell'>
                <img
                  className='tablePayments__icon'
                  src={t?.coin?.icon}
                  alt={`${t?.coin?.name} icon`}
                />
                <div className='tablePayments__head'>
                  <Text>{`Sent ${t?.coin?.amount?.toFixed(6)} ${
                    t?.coin?.symbol
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
