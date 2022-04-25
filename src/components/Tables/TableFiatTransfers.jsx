import './TablePayments.css';

import { Table, Text } from '..';

import { TransactionsContext } from '../../contexts/TransactionsContext';
import { transactionTime } from '../../utilities/transform-dates';
import { useContext } from 'react';

const TableFiatTransfers = () => {
  const { fiatTransactions } = useContext(TransactionsContext);

  return (
    <Table>
      <tbody>
        {fiatTransactions.slice(0, 5).map((t) => (
          <tr key={t?.id}>
            <td>
              <div className='tablePayments__cell'>
                <img
                  className='tablePayments__icon'
                  src={t?.fiat?.icon}
                  alt={`${t?.fiat?.name} icon`}
                />
                <div className='tablePayments__head'>
                  <Text>{`${
                    t?.type === 'depositFiat' ? 'Deposited' : 'Withdrew'
                  } ${t?.fiat?.amount} ${t?.fiat?.symbol}`}</Text>
                </div>
                <div className='tablePayments__body'>
                  <Text color='grey' size='s'>
                    {`On ${transactionTime(t?.timestamp)}`}
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
