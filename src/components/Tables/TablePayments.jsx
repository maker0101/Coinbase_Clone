import './TablePayments.css';

import { Table, Text } from '..';

import { TransactionsContext } from '../../contexts/TransactionsContext';
import { transactionTime } from '../../utilities/transform-dates';
import { useContext } from 'react';

const TablePayments = () => {
  const { sendTransactions } = useContext(TransactionsContext);

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
                    {`To ${t?.address} on ${transactionTime(t?.timestamp)}`}
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
