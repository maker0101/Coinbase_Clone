import './TableRecentTransactions.css';
import { Text, Table } from '..';

const TableRecentTransactions = ({ transactions }) => {
  const createHeadText = (transactionType, assetName) => {
    let transactionTypePastTense;
    if (transactionType === 'buy') transactionTypePastTense = 'Bought';
    if (transactionType === 'sell') transactionTypePastTense = 'Sold';
    if (transactionType === 'convert') transactionTypePastTense = 'Converted';

    return `${transactionTypePastTense} ${assetName}`;
  };

  const createBodyText = (transactionAmount, assetSymbol, transactionDate) => {
    return `${transactionAmount} ${assetSymbol} on ${transactionDate}`;
  };

  return (
    <Table>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.symbol}>
            <td>
              <div className='tableRecentTransactions__cell'>
                <div className='tableRecentTransactions__icon'>{t.icon}</div>
                <div className='tableRecentTransactions__head'>
                  <Text>{createHeadText(t.type, t.name)}</Text>
                </div>
                <div className='tableRecentTransactions__body'>
                  <Text color='grey' size='s'>
                    {createBodyText(t.amount, t.symbol, t.date)}
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
