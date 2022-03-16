import './TableAssets.css';
import { Table, TableCellCoinName, TableCellWatch, Text, LineChart } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';
import { convertToCurrency } from '../../utilities/convert-to-currency';
import { formatMarketCap } from '../../utilities/format-market-cap';

const TableAssets = ({ assets }) => {
  let isWidthMin800 = useMediaQuery('(min-width: 800px)');
  let isWidthMin400 = useMediaQuery('(min-width: 400px)');

  return (
    <Table>
      {isWidthMin800 && (
        <thead>
          <tr>
            <th>Name</th>
            <th>Past 24h</th>
            <th>Price</th>
            <th>Change</th>
            <th>Market cap</th>
            <th>Watch</th>
          </tr>
        </thead>
      )}
      <tbody>
        {assets.map((asset) => (
          <tr key={asset.symbol}>
            <td>
              <TableCellCoinName
                icon={asset?.icon}
                name={asset?.name}
                symbol={asset?.symbol}
              />
            </td>

            {isWidthMin400 && (
              <td>
                <div className='tableAssets__priceChart'>
                  <LineChart
                    chartData={asset?.sparkline}
                    labelsKey='time'
                    datasetsKey='price'
                    hasTooltip={false}
                  />
                </div>
              </td>
            )}
            <td>
              <Text>{convertToCurrency(asset?.price_eur)}</Text>
              {!isWidthMin800 && (
                <Text color={asset?.price_change24h < 0 ? 'red' : 'green'}>
                  {asset?.price_change24h}%
                </Text>
              )}
            </td>
            {isWidthMin800 && (
              <>
                <td>
                  <Text color={asset?.price_change24h < 0 ? 'red' : 'green'}>
                    {asset?.price_change24h}%
                  </Text>
                </td>
                <td>
                  <Text>{formatMarketCap(asset?.market_cap)}</Text>
                </td>
                <td>
                  <TableCellWatch onWatchlist={asset?.onWatchlist} />
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableAssets;
