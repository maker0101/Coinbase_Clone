import './TablePayments.css';
import { Text, Table } from '..';
import useTransactions from '../../hooks/useTransactions';
import { timestampToMonthDayYear } from '../../utilities/transform-dates';

const TableFiatTransfers = () => {
  const { fiatTransactions } = useTransactions();

  return (
    <Table>
      <tbody>
        {fiatTransactions.map((t) => (
          <tr key={t?.id}>
            <td>
              <div className='tablePayments__cell'>
                <img className='tablePayments__icon' src={t?.icon} />
                <div className='tablePayments__head'>
                  <Text>{`${
                    t?.type === 'depositFiat' ? 'Deposited' : 'Withdrew'
                  } ${t?.amount_fiat} ${t?.in_symbol || t?.out_symbol}`}</Text>
                </div>
                <div className='tablePayments__body'>
                  <Text color='grey' size='s'>
                    {`On ${timestampToMonthDayYear(t?.timestamp)}`}
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
