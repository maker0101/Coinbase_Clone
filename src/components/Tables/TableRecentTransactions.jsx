import './TableRecentTransactions.css';
import { Text, Table } from '..';
import useTransactions from '../../hooks/useTransactions';
import { timestampToMonthDayYear } from '../../utilities/transform-dates';

const TableRecentTransactions = () => {
  const { tradeTransactions } = useTransactions();

  const createHeadText = (transaction) => {
    let action;
    let assetName = transaction?.coin?.name;

    if (transaction?.type === 'buyCoin') action = 'Bought';
    if (transaction?.type === 'sellCoin') action = 'Sold';
    if (transaction?.type === 'convertCoin') action = 'Converted';

    return `${action} ${assetName}`;
  };

  const createBodyText = (transaction) => {
    let symbol;
    const amount = transaction?.coin?.amount?.toFixed(6);
    const time = timestampToMonthDayYear(transaction?.timestamp);

    if (transaction?.type === 'buyCoin' || transaction?.type === 'sellCoin')
      symbol = transaction?.coin?.symbol;
    if (transaction?.type === 'convertCoin')
      symbol = transaction?.coinConvertTo?.symbol;

    return `${amount} ${symbol} on ${time}`;
  };

  return (
    <Table>
      <tbody>
        {tradeTransactions.map((t) => (
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
