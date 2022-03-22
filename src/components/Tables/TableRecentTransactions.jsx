import './TableRecentTransactions.css';
import { Text, Table } from '..';
import useTransactions from '../../hooks/useTransactions';
import { timestampToMonthDayYear } from '../../utilities/transform-dates';

const TableRecentTransactions = () => {
  const { tradeTransactions } = useTransactions();
  console.log(tradeTransactions);

  const getAssetName = (transaction) => {
    if (transaction?.type === 'buyCoin') return transaction?.in_name;
    if (transaction?.type === 'sellCoin') return transaction?.out_name;
    if (transaction?.type === 'convertCoin') return transaction?.out_name;
  };

  const createHeadText = (transaction) => {
    let action;
    let assetName = getAssetName(transaction);

    if (transaction?.type === 'buyCoin') action = 'Bought';
    if (transaction?.type === 'sellCoin') action = 'Sold';
    if (transaction?.type === 'convertCoin') action = 'Converted';

    return `${action} ${assetName}`;
  };

  const createBodyText = (transaction) => {
    let symbol;

    if (transaction?.type === 'buyCoin') symbol = transaction?.in_symbol;
    if (transaction?.type === 'sellCoin') symbol = transaction?.out_symbol;
    if (transaction?.type === 'convertCoin') symbol = transaction?.out_symbol;

    return `${(
      transaction?.amount_coin_in || transaction?.amount_coin_out
    ).toFixed(4)} ${symbol} on ${timestampToMonthDayYear(
      transaction.timestamp
    )}`;
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
                  src={t?.icon}
                  alt={`${getAssetName(t)} icon`}
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
