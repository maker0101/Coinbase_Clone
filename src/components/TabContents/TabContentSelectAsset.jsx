import './TabContentSelectAsset.css';
import { Text, Search, TabContent, Table, TableCellCoinName } from '..';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import useAssets from '../../hooks/useAssets';
import useSearch from '../../hooks/useSearch';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentSelectAsset = () => {
  const {
    toggleIsSelectAssetOpen,
    selectedCoin,
    selectedFiat,
    lastSelectAssetType,
    handleSelectAsset,
    checkIsSelected,
  } = useContext(SelectAssetContext);
  const { allCoins, allFiat } = useAssets();
  const assets = lastSelectAssetType === 'fiat' ? allFiat : allCoins;

  const { searchResult, searchInput, handleSearch } = useSearch(assets);

  return (
    <TabContent>
      <div className='tabContent__titleGrid'>
        <FaArrowLeft onClick={toggleIsSelectAssetOpen} />
        <Text h3>Select Asset</Text>
      </div>
      <Search
        searchInput={searchInput}
        handleSearch={handleSearch}
        allItems={assets}
        maxWidth={800}
      />
      <Table hasSmallPadding hasBorderBottom={false}>
        <tbody className='tabContent__selectAssetBody'>
          {searchResult.map((asset) => (
            <tr
              className={
                checkIsSelected(asset, selectedCoin, selectedFiat)
                  ? 'tabContent__isSelectedAsset'
                  : ''
              }
              key={asset?.symbol}
              onClick={() => handleSelectAsset(asset, lastSelectAssetType)}>
              <td>
                <TableCellCoinName
                  icon={asset?.icon}
                  name={asset?.name}
                  symbol={asset?.symbol}
                />
              </td>
              <td>
                <div className='tabContent__selectAssetCell'>
                  {lastSelectAssetType === 'fiat' ? (
                    <Text>{convertToCurrency(asset?.balance_eur)}</Text>
                  ) : (
                    <div className='tabContent__selectAssetBalance'>
                      <Text>{`${asset?.balance_coin} ${asset?.symbol}`}</Text>
                      <Text color='grey' size='s'>
                        {convertToCurrency(asset?.balance_eur)}
                      </Text>
                    </div>
                  )}
                  {checkIsSelected(asset, selectedCoin, selectedFiat) && (
                    <FaCheck />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TabContent>
  );
};

export default TabContentSelectAsset;
