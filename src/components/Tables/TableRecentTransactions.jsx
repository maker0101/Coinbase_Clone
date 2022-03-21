import './TableRecentTransactions.css';
import { Text, Table } from '..';
import useTransactions from '../../hooks/useTransactions';

const TableRecentTransactions = ({ transactions }) => {
  const { tradeTransactions } = useTransactions();
  console.log(tradeTransactions);

  const createHeadText = (transactionType, assetName) => {
    let pastTense;
    if (transactionType === 'buy') pastTense = 'Bought';
    if (transactionType === 'sell') pastTense = 'Sold';
    if (transactionType === 'convert') pastTense = 'Converted';

    return `${pastTense} ${assetName}`;
  };

  const createBodyText = (transactionAmount, assetSymbol, transactionDate) => {
    return `${transactionAmount} ${assetSymbol} on ${transactionDate}`;
  };

  return (
    <Table>
      <tbody>
        {transactions.map((t) => (
          <tr key={t?.symbol}>
            <td>
              <div className='tableRecentTransactions__cell'>
                <img
                  className='tableRecentTransactions__icon'
                  src={t?.icon}
                  alt={`${t.name} icon`}
                />
                <div className='tableRecentTransactions__head'>
                  <Text>{createHeadText(t?.type, t?.name)}</Text>
                </div>
                <div className='tableRecentTransactions__body'>
                  <Text color='grey' size='s'>
                    {createBodyText(t?.amount, t?.symbol, t?.date)}
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
