import './TableRecentTransactions.css';

import { Table, Text } from '..';

import { TransactionsContext } from '../../contexts/TransactionsContext';
import { transactionTime } from '../../utilities/transform-dates';
import { useContext } from 'react';

const TableRecentTransactions = () => {
  const { tradeTransactions } = useContext(TransactionsContext);

  const createHeadText = (transaction) => {
    const assetName = transaction?.coin?.name;
    let action;
    if (transaction?.type === 'buyCoin') action = 'Bought';
    if (transaction?.type === 'sellCoin') action = 'Sold';
    if (transaction?.type === 'convertCoin') action = 'Converted';

    return `${action} ${assetName}`;
  };

  const createBodyText = (transaction) => {
    const symbol = transaction?.coin?.symbol;
    const amount = transaction?.coin?.amount?.toFixed(6);
    const time = transactionTime(transaction?.timestamp);

    return `${amount} ${symbol} on ${time}`;
  };

  return (
    <Table>
      <tbody>
        {tradeTransactions.slice(0, 5).map((t) => (
          <tr key={t?.id}>
            <td>
              <div className='tableRecentTransactions__cell'>
                <img
                  className='tableRecentTransactions__icon'
                  src={t?.coin?.icon}
                  alt={`${t?.coin?.name} icon`}
                />
                <div className='tableRecentTransactions__head'>
                  <Text>{createHeadText(t)}</Text>
                </div>
                <div className='tableRecentTransactions__body'>
                  <Text color='grey' size='s'>
                    {createBodyText(t)}
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

export default TableRecentTransactions;
