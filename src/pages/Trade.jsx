import './Trade.css';

import {
  ContentCenter,
  ContentRight,
  Dropdown,
  Search,
  Section,
  SectionTitle,
  TabTrade,
  TableAssets,
  TableRecentTransactions,
} from '../components';

import { AssetsContext } from '../contexts/AssetsContext';
import useCombineSearchFilter from '../hooks/useCombineSearchFilter';
import { useContext } from 'react';
import useFilter from '../hooks/useFilter';
import useMediaQuery from '../hooks/useMediaQuery';
import useSearch from '../hooks/useSearch';

const ASSET_OPTIONS = ['All assets', 'Watchlist'];

const Trade = () => {
  const isWidthMin1150 = useMediaQuery('(min-width: 1150px)');
  const isWidthMin800 = useMediaQuery('(min-width: 800px)');
  const { allCoins } = useContext(AssetsContext);

  const { searchResult, searchInput, handleSearch } = useSearch(allCoins);
  const { filterResult, filterInput, handleFilter } = useFilter(
    allCoins,
    'All assets'
  );
  const { searchFilterResult } = useCombineSearchFilter(
    searchResult,
    filterResult,
    'symbol'
  );

  const assetsInTable =
    searchInput || filterInput !== 'All assets' ? searchFilterResult : allCoins;

  const watchlistQuery = (asset) => asset.onWatchlist;

  return (
    <>
      <ContentCenter>
        <Section>
          <SectionTitle title='All Assets' noBorderBottom />
          <div className='trade__searchFilterRow'>
            <Search
              searchInput={searchInput}
              handleSearch={handleSearch}
              allItems={allCoins}
            />
            {isWidthMin800 && (
              <div className='trade__filters'>
                <Dropdown
                  name='assetOptions'
                  options={ASSET_OPTIONS}
                  value={filterInput}
                  onChange={(e) => handleFilter(e, allCoins, watchlistQuery)}
                />
              </div>
            )}
          </div>
          <TableAssets assets={assetsInTable} />
        </Section>
      </ContentCenter>
      <ContentRight>
        {isWidthMin1150 && (
          <Section>
            <TabTrade />
          </Section>
        )}
        <Section>
          <SectionTitle title='Recent transactions' />
          <TableRecentTransactions />
        </Section>
      </ContentRight>
    </>
  );
};

export default Trade;
