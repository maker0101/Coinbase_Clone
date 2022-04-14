import { Table, TableCellCoinName, Text } from '..';

import { calculateAllocation } from '../../utilities/calculate-allocation';
import { convertToCurrency } from '../../utilities/convert-to-currency';
import useMediaQuery from '../../hooks/useMediaQuery';

const TableYourAssets = ({ assets }) => {
  const isWidthMin800 = useMediaQuery('(min-width: 800px)');

  return (
    <Table>
      {isWidthMin800 && (
        <thead>
          <tr>
            <th>Name</th>
            <th>Ballance</th>
            <th>Price</th>
            <th>Allocation</th>
          </tr>
        </thead>
      )}
      <tbody>
        {assets.map((asset) => (
          <tr key={asset?.symbol}>
            <td>
              <TableCellCoinName
                icon={asset?.icon}
                name={asset?.name}
                symbol={asset?.symbol}
              />
            </td>
            <td>
              <Text>{convertToCurrency(asset.balance_eur)}</Text>
              <Text color='grey' size='s'>
                {`${asset?.balance_coin?.toFixed(6)} ${asset?.symbol}`}
              </Text>
            </td>
            {isWidthMin800 && (
              <td>
                <Text>{convertToCurrency(asset?.price_eur)}</Text>
                <Text
                  size='s'
                  color={asset?.price_change24h < 0 ? 'red' : 'green'}>
                  {asset?.price_change24h}%
                </Text>
              </td>
            )}
            {isWidthMin800 && (
              <td>
                <Text>{calculateAllocation(assets, asset)}%</Text>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableYourAssets;
